"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    {children}
  </div>
);

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-5">
    <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
    {children}
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-600 leading-relaxed mb-3">{children}</p>
);

const Ul = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mb-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-slate-600">
        <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>
        {item}
      </li>
    ))}
  </ul>
);

const UlNo = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mb-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-slate-600">
        <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs">✕</span>
        {item}
      </li>
    ))}
  </ul>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function TermsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-green-900" style={{ background: "#073F31" }}>
        <nav className="w-full px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Scillustrate" className="h-8" style={{ width: "auto" }} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors text-white/75 hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-white hover:bg-slate-50"
              onClick={() => window.open("https://app.scillustrate.io", "_blank")}
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-1" style={{ background: "#073F31" }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-md text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Button
                variant="outline"
                className="w-full bg-white hover:bg-slate-50"
                onClick={() => { window.open("https://app.scillustrate.io", "_blank"); setMenuOpen(false); }}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4">
            Last updated: May 2026
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Terms of Use &amp; Licensing</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            These terms explain how you may use the illustrations, animations and other content created through Scillustrate. By using our platform you agree to these terms.
          </p>
        </div>

        <div className="w-full h-px bg-slate-200 mb-10" />

        {/* 1. Intellectual Property */}
        <Section title="1. Intellectual Property">
          <P>
            All illustrations, animations, icons and visual assets available through Scillustrate are the intellectual property of Scillustrate. Your licence grants you the right to use these assets as described below; it does not transfer ownership to you.
          </P>
          <P>
            Our illustrations are proudly hand-crafted by scientists and artists. They may not be used to train, fine-tune or otherwise develop artificial intelligence or machine learning models under any circumstances.
          </P>
        </Section>

        {/* 2. Permitted Use by Licence */}
        <Section title="2. Permitted Use by Licence">

          <Sub title="Educational Licence (Free)">
            <P>With a free account you may use Scillustrate illustrations and animations for:</P>
            <Ul items={[
              "Personal, educational and non-commercial use",
              "Student assignments, coursework and internal class presentations",
              "Team presentations, protocols, lectures and internal educational materials",
              "Social media posts for personal or educational purposes (with attribution)",
            ]} />
            <P>The following uses are not permitted on the free plan:</P>
            <UlNo items={[
              "Publication in academic journals, conference proceedings or theses",
              "Use in grant applications or funding proposals",
              "Any commercial use, including marketing materials or client work",
            ]} />
          </Sub>

          <Sub title="Per-Submission Licence">
            <P>
              A per-submission licence covers all Scillustrate illustrations used in a single named submission. Two tiers are available, each generating a unique licence certificate at the point of purchase.
            </P>
            <P><strong className="text-slate-800">Thesis, Poster, Conference Presentation or Grant Application (£6.99)</strong></P>
            <Ul items={[
              "Use in a single thesis or dissertation",
              "Use in a single conference poster or oral presentation",
              "Use in a single grant application or funding proposal",
            ]} />
            <P><strong className="text-slate-800">Publication, peer-reviewed paper or preprint (£39.99)</strong></P>
            <Ul items={[
              "Use in a single peer-reviewed journal article or preprint",
              "All figures within that submission are covered by one licence",
            ]} />
          </Sub>

          <Sub title="Annual Bundle">
            <P>
              An Annual Bundle covers a research group of up to 10 people for 12 months from the date of purchase. All named members may use Scillustrate for unlimited submissions without purchasing individual per-submission licences. This includes:
            </P>
            <Ul items={[
              "Unlimited theses, posters, conference presentations and grant applications",
              "Unlimited peer-reviewed journal publications and preprints",
            ]} />
            <P>
              The bundle is intended for a single research group. Members must be named at the time of purchase and may be updated by contacting us. It may not be shared across separate groups or departments.
            </P>
          </Sub>

          <Sub title="Enterprise">
            <P>Enterprise licences are tailored to your institution. Permitted uses are defined in your individual agreement with Scillustrate. Contact us to discuss your requirements.</P>
          </Sub>
        </Section>

        {/* 3. Licence Certificates */}
        <Section title="3. Per-Submission Licence Certificates">
          <P>
            Each per-submission licence purchase generates a unique licence reference number, which is provided in your confirmation email and order history. This reference number is your proof of licence for that submission.
          </P>
          <P>You are required to:</P>
          <Ul items={[
            "Include the licence reference number in the acknowledgements, methods section or figure caption of the relevant submission",
            "Retain a copy of your licence certificate for your records",
          ]} />
          <P>Each per-submission licence:</P>
          <Ul items={[
            "Covers one named submission only and is non-transferable",
            "Cannot be shared with or used by another individual",
            "Remains valid indefinitely for the submission it was purchased for",
          ]} />
          <P>
            Reusing a single per-submission licence for multiple submissions is a breach of these terms. Scillustrate reserves the right to revoke licences and suspend accounts where misuse is identified.
          </P>
        </Section>

        {/* 4. Prohibited Uses */}
        <Section title="4. Prohibited Uses (All Licences)">
          <P>Regardless of your licence type, the following are never permitted:</P>
          <UlNo items={[
            "Reselling, sublicensing or redistributing illustrations as standalone assets",
            "Including illustrations in products, templates or asset packs sold to third parties",
            "Claiming authorship or ownership of any Scillustrate illustration",
            "Using illustrations to train, fine-tune or develop AI or machine learning models",
            "Removing or altering any attribution or watermark where required",
            "Using content in a way that is misleading, defamatory or unlawful",
          ]} />
        </Section>

        {/* 5. Attribution */}
        <Section title="5. Attribution">
          <P>
            Credit attribution is required for all content created using Scillustrate. When publishing or sharing illustrations or animations, please include the credit "Illustration/animation created with Scillustrate.io" in the figure caption, methods section, or acknowledgements. For presentations and educational materials, attribution should appear on the relevant slide or page.
          </P>
        </Section>

        {/* 6. Custom Illustrations */}
        <Section title="6. Custom Illustrations">
          <P>
            For fully bespoke illustration packages, where custom artwork is created exclusively for your organisation, please get in touch at <a href="mailto:sales@scillustrate.io" className="text-emerald-700 hover:underline">sales@scillustrate.io</a>.
          </P>
        </Section>

        {/* 7. Changes */}
        <Section title="7. Changes to These Terms">
          <P>
            We may update these terms from time to time. Where changes are material, we will notify active subscribers by email. Continued use of the platform after any update constitutes acceptance of the revised terms.
          </P>
        </Section>

        {/* 8. Questions */}
        <Section title="8. Questions">
          <P>
            If you are unsure whether your intended use is permitted, or if you need a licence that falls outside the above, please get in touch. We are happy to discuss bespoke arrangements.
          </P>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="mailto:hello@scillustrate.io"
              className="inline-block px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
            >
              General enquiries
            </a>
            <a
              href="mailto:sales@scillustrate.io"
              className="inline-block px-6 py-3 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold text-sm transition-colors"
            >
              Enterprise licensing
            </a>
          </div>
        </Section>
      </main>

      <footer style={{ background: "#0f172a" }} className="text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Scillustrate" className="h-6" style={{ width: "auto" }} />
            <div className="flex gap-6 flex-wrap justify-center">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="text-white/40 text-xs hover:text-white/70 transition-colors">
                  {label}
                </Link>
              ))}
              <Link href="/terms" className="text-white/70 text-xs hover:text-white transition-colors">Terms</Link>
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
