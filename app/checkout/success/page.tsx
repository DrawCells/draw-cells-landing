"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuccessContent() {
  const params = useSearchParams();
  const licenceRef = params.get("ref");
  const tier = params.get("tier");
  const isBundle = tier === "bundle";

  return (
    <main className="max-w-xl mx-auto px-6 py-24 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Payment confirmed!</h1>
      <p className="text-slate-500 text-lg leading-relaxed mb-8">
        {isBundle
          ? "Thank you for your purchase. Your group's licence reference is shown below — share it with all members of your research group."
          : "Thank you for your purchase. Your licence reference number is shown below and has also been sent to your email address."}
      </p>

      {licenceRef && (
        <div className="bg-slate-900 rounded-2xl px-8 py-6 mb-8">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Your Licence Reference</p>
          <p className="text-3xl font-mono font-bold text-white tracking-wider">{licenceRef}</p>
          <p className="text-slate-400 text-xs mt-3">
            {isBundle
              ? "Valid for 12 months · Use this reference for all your submissions"
              : "Keep this safe — include it in your acknowledgements or methods section"}
          </p>
        </div>
      )}

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8 text-left space-y-3">
        <h2 className="font-semibold text-emerald-800">What to do next</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">1</span>
            Check your email for your licence reference number
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">2</span>
            {isBundle
              ? "Use this reference for all your group's submissions over the next 12 months — share it with all members of your research group"
              : "Include your licence reference number in the acknowledgements or methods section of your submission"}
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">3</span>
            Credit your figures in the caption as best suited, for example: <em className="text-slate-700 not-italic font-medium">"Illustration/animation created with Scillustrate.io"</em>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          onClick={() => window.open("https://app.scillustrate.io", "_blank")}
        >
          Go to Scillustrate →
        </Button>
        <Link href="/contact">
          <Button variant="outline" className="w-full sm:w-auto">Questions? Contact us</Button>
        </Link>
      </div>
    </main>
  );
}

export default function CheckoutSuccessPage() {
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

      <Suspense fallback={<div className="text-center py-24 text-slate-400">Loading...</div>}>
        <SuccessContent />
      </Suspense>

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
