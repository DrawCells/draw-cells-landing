import { NextRequest, NextResponse } from "next/server";
import { Creem } from "creem";

const isTestMode = process.env.CREEM_API_KEY?.startsWith("creem_test_");
const creem = new Creem({
  apiKey: process.env.CREEM_API_KEY!,
  serverIdx: isTestMode ? 1 : 0,
});

const PRODUCT_IDS: Record<string, string> = {
  thesis: process.env.CREEM_PRODUCT_THESIS!,
  publication: process.env.CREEM_PRODUCT_PUBLICATION!,
  bundle: process.env.CREEM_PRODUCT_BUNDLE!,
};

function generateLicenceRef(tier: string): string {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return tier === "bundle" ? `SCI-ANNUAL-${year}-${random}` : `SCI-${year}-${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const { tier, name, email, institution, submissionTitle } = await req.json();

    if (!tier || !name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const productId = PRODUCT_IDS[tier];
    if (!productId) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const licenceRef = generateLicenceRef(tier);

    const checkout = await creem.checkouts.create({
      productId,
      successUrl: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&ref=${licenceRef}&tier=${tier}`,
      metadata: {
        tier,
        licenceRef,
        customerName: name,
        customerEmail: email,
        institution: institution || "",
        submissionTitle: submissionTitle || "",
      },
    });

    return NextResponse.json({ checkoutUrl: checkout.checkoutUrl });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
