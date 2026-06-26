"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Tier = "thesis" | "publication" | "bundle";

const TIERS = [
  {
    id: "thesis" as Tier,
    name: "Thesis, Poster, Conference Presentation or Grant Application",
    price: "£6.99",
    description: "Per submission — one thesis, poster, presentation or grant application",
  },
  {
    id: "publication" as Tier,
    name: "Publication",
    price: "£69.99",
    description: "Per submission of one manuscript and/or its associated preprint",
  },
  {
    id: "bundle" as Tier,
    name: "Annual Bundle",
    price: "£199 / year",
    description: "Unlimited submissions, per research group of up to 10 people",
  },
];

export default function CheckoutPage() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [submissionTitle, setSubmissionTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: selectedTier, name, email, institution, submissionTitle }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-green-900" style={{ background: "#073F31" }}>
        <nav className="w-full px-6 flex items-center justify-between h-16">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Scillustrate" className="h-8" style={{ width: "auto" }} />
          </Link>
          <Link href="/" className="text-white/75 hover:text-white text-sm font-medium transition-colors">
            ← Back to home
          </Link>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Get your licence</h1>
          <p className="text-slate-500 leading-relaxed">
            Select the licence type that matches your submission. You will receive a unique licence reference number by email after payment, to include in your acknowledgements or methods section.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Tier selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Select licence type <span className="text-rose-400">*</span></label>
            {TIERS.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTier(tier.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedTier === tier.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{tier.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{tier.description}</p>
                  </div>
                  <span className="font-bold text-slate-900 whitespace-nowrap">{tier.price}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-slate-700">Your details</h2>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-slate-600">Full name <span className="text-rose-400">*</span></label>
              <Input id="name" type="text" placeholder="Dr. Jane Smith" value={name} onChange={(e) => setName(e.target.value)} required className="h-11" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-slate-600">Email address <span className="text-rose-400">*</span></label>
              <Input id="email" type="email" placeholder="you@university.ac.uk" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11" />
            </div>

            <div className="space-y-2">
              <label htmlFor="institution" className="text-sm text-slate-600">Institution / organisation</label>
              <Input id="institution" type="text" placeholder="University of Edinburgh" value={institution} onChange={(e) => setInstitution(e.target.value)} className="h-11" />
            </div>

            <div className="space-y-2">
              <label htmlFor="submissionTitle" className="text-sm text-slate-600">
                {selectedTier === "bundle" ? "Research group name" : "Submission title"}
              </label>
              <Input
                id="submissionTitle"
                type="text"
                placeholder={
                  selectedTier === "bundle"
                    ? "e.g. Smith Lab, Department of Cell Biology"
                    : selectedTier === "publication"
                    ? "e.g. Novel mechanisms of mitochondrial fission..."
                    : "e.g. PhD thesis title, grant name or conference"
                }
                value={submissionTitle}
                onChange={(e) => setSubmissionTitle(e.target.value)}
                className="h-11"
              />
            </div>
          </div>

          {error && <p className="text-rose-500 text-sm">{error}</p>}

          <Button
            type="submit"
            size="lg"
            disabled={!selectedTier || !name || !email || loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-base disabled:opacity-50"
          >
            {loading ? "Redirecting to payment..." : "Continue to payment →"}
          </Button>

          <p className="text-center text-xs text-slate-400">
            Payments processed securely by Creem. All prices include VAT.{" "}
            <Link href="/terms" className="underline hover:text-slate-600">Terms & Licensing</Link>
          </p>
        </form>
      </main>

      <footer style={{ background: "#0f172a" }} className="text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Scillustrate" className="h-6" style={{ width: "auto" }} />
            <p className="text-white/30 text-xs">© 2026 Scillustrate</p>
          </div>
          <p className="text-white/20 text-xs text-center">
            Scillustrate is a trading name of Science Visuals Ltd, registered in England and Wales · Company no. 15029766 · 128 City Road, London, EC1V 2NX
          </p>
        </div>
      </footer>
    </div>
  );
}
