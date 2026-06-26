"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// To receive form submissions by email, sign up free at https://formspree.io
// create a form, and replace "YOUR_FORM_ID" below with your form ID.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xredrnkk";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
          <ul className="flex items-center gap-1 list-none">
            {[
              { label: "Home", href: "/" },
              { label: "Features", href: "/#features" },
              { label: "FAQ", href: "/#faq" },
              { label: "About Us", href: "/#about" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    label === "Contact"
                      ? "bg-white/15 text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="bg-white hover:bg-slate-50"
            onClick={() => window.open("https://app.scillustrate.io", "_blank")}
          >
            Start Creating
          </Button>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Whether you have feedback for us, a feature request, or just want to say hello, we would love to hear from you.
          </p>
        </div>

        {/* Contact info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { label: "General enquiries", email: "hello@scillustrate.io" },
            { label: "Support", email: "support@scillustrate.io" },
            { label: "Custom illustrations", email: "figures@scillustrate.io" },
            { label: "Sales & licensing", email: "sales@scillustrate.io" },
          ].map(({ label, email }) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
            >
              <p className="text-xs text-slate-400 mb-1">{label}</p>
              <p className="text-sm font-medium text-emerald-700 group-hover:text-emerald-600">{email}</p>
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-slate-200 mb-10" />

        {/* Form */}
        {status === "success" ? (
          <div className="text-center py-16 space-y-4">
            <div className="text-5xl">🎉</div>
            <h2 className="text-2xl font-bold text-slate-900">Message sent!</h2>
            <p className="text-slate-500">Thanks for reaching out. We will get back to you as soon as we can.</p>
            <Button
              className="mt-4 bg-emerald-600 hover:bg-emerald-700"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name <span className="text-rose-400">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email <span className="text-rose-400">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="message"
                placeholder="How can we help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-rose-500 text-sm">
                Something went wrong. Please try again or email us directly at hello@scillustrate.io
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-base"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </Button>
          </form>
        )}
      </main>

      <footer style={{ background: "#0f172a" }} className="text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Scillustrate" className="h-6" style={{ width: "auto" }} />
            <div className="flex gap-6 flex-wrap justify-center">
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "/#features" },
                { label: "FAQ", href: "/#faq" },
                { label: "About Us", href: "/#about" },
                { label: "Contact", href: "/contact" },
                { label: "Terms", href: "/terms" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="text-white/40 text-xs hover:text-white/70 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
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
