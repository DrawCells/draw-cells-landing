import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createClient } from "@supabase/supabase-js";

// Supabase client using service role key (bypasses RLS — server only)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const TIER_LABELS: Record<string, string> = {
  thesis: "Thesis, Poster, Conference Presentation or Grant Application Licence",
  publication: "Publication Licence",
  bundle: "Annual Bundle",
};

function verifySignature(payload: string, signature: string, secret: string): boolean {
  try {
    const hmac = createHmac("sha256", secret);
    hmac.update(payload);
    const expected = hmac.digest("hex");
    return signature === expected || signature === `sha256=${expected}`;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("creem-signature") || req.headers.get("x-creem-signature") || "";
    const secret = process.env.CREEM_WEBHOOK_SECRET || "";

    // Verify signature if secret is set
    if (secret && signature && !verifySignature(rawBody, signature, secret)) {
      console.warn("Webhook signature verification failed");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const eventType = body.eventType || body.type || "";
    console.log("Webhook received:", eventType);

    // Only handle completed payment events
    if (!eventType.includes("completed") && !eventType.includes("paid")) {
      return NextResponse.json({ received: true });
    }

    const metadata = body.object?.metadata || body.data?.metadata || body.metadata || {};
    const licenceRef = metadata.licenceRef || "";
    const tier = metadata.tier || "";
    const customerName = metadata.customerName || body.object?.customer?.name || "";
    const customerEmail = metadata.customerEmail || body.object?.customer?.email || "";
    const institution = metadata.institution || "";
    const submissionTitle = metadata.submissionTitle || "";
    const tierLabel = TIER_LABELS[tier] || "Scillustrate Licence";

    // Compute expiry for annual bundle (12 months from now)
    const expiresAt = tier === "bundle"
      ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      : null;

    // Save to Supabase
    const { error } = await supabase.from("licences").insert({
      licence_ref: licenceRef,
      tier,
      customer_name: customerName,
      customer_email: customerEmail,
      institution,
      submission_title: submissionTitle,
      expires_at: expiresAt,
    });

    if (error) {
      console.error("Supabase insert error:", error);
    } else {
      console.log(`Licence saved: ${licenceRef} — ${tierLabel} — ${customerName} <${customerEmail}>`);
    }

    // TODO: Send confirmation email via Resend

    return NextResponse.json({ received: true, licenceRef });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
