"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/animated-background";

const Logo = ({ className = "h-10" }: { className?: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/logo.svg" alt="Scillustrate" className={className} style={{ width: "auto" }} />
);

type Section = "home" | "features" | "about" | "faq";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [annualBilling, setAnnualBilling] = useState(true);
  const [industryPricing, setIndustryPricing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const WAITLIST_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeMHnLyJE6T5CjZm04DxiIIOWjp9uki0VAlUEepNDwLpWSxqg/viewform?usp=header";

  const navItems: { key: Section; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "features", label: "Features" },
    { key: "faq", label: "FAQ" },
    { key: "about", label: "About Us" },
  ];

  const scrollToSection = (key: Section) => {
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    (["home", "features", "about", "faq"] as Section[]).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-green-900" style={{ background: "#073F31" }}>
        <nav className="w-full px-6 flex items-center justify-between h-16">
          <button onClick={() => { scrollToSection("home"); setMenuOpen(false); }} className="flex items-center gap-2">
            <Logo className="h-8" />
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {navItems.map(({ key, label }) => (
              <li key={key}>
                <button
                  onClick={() => scrollToSection(key)}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === key
                      ? "bg-white/15 text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a href="/contact" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors text-white/75 hover:bg-white/10 hover:text-white">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-white hover:bg-slate-50"
              onClick={() => window.open("https://app.scillustrate.io", "_blank")}
            >
              Start Creating
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
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { scrollToSection(key); setMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === key ? "bg-white/15 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
            <a href="/contact" className="px-4 py-3 rounded-md text-sm font-medium text-white/75 hover:bg-white/10 hover:text-white transition-colors">
              Contact
            </a>
            <div className="pt-2 pb-1">
              <Button
                variant="outline"
                className="w-full bg-white hover:bg-slate-50"
                onClick={() => { window.open("https://app.scillustrate.io", "_blank"); setMenuOpen(false); }}
              >
                Start Creating
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ── HOME ── */}
        <section id="home" className="relative px-6 pt-20 pb-16 text-center bg-white" style={{ overflow: "clip" }}>
              <AnimatedBackground />
              <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  300+ Scientific Illustrations Available
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
                  Bring Your Science{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    To Life
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Create stunning scientific illustrations and animations effortlessly. Built for scientists, students and educators who want to communicate with clarity and impact.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6"
                    onClick={() => window.open("https://app.scillustrate.io", "_blank")}
                  >
                    Start Creating →
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Feature Request
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {["Free for educational use", "No download needed", "Works in your browser"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-sm text-slate-600 bg-slate-100 px-4 py-1.5 rounded-full">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative z-10">
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <video
                  src="https://res.cloudinary.com/do1r7p1lq/video/upload/v1782424885/Scillustrate_Demo_vsmafo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={3022}
                  height={1644}
                  className="w-full block h-auto"
                />
              </div>
            </section>

        <section className="py-16 bg-white text-center border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Perfect for Scientists</h2>
            <p className="text-slate-500 leading-relaxed">
              Whether presenting in seminars, creating educational content or simply explaining complex biological processes — Scillustrate gives you the tools to make science memorable.
            </p>
            <div className="flex justify-center gap-12 flex-wrap pt-4">
              {[
                { num: "300+", label: "Scientific Illustrations", color: "text-emerald-600" },
                { num: "2", label: "Export Options", color: "text-teal-600" },
                { num: "∞", label: "Creative Possibilities", color: "text-blue-600" },
              ].map(({ num, label, color }) => (
                <div key={label} className="text-center">
                  <div className={`text-5xl font-bold ${color}`}>{num}</div>
                  <div className="text-slate-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center" style={{ background: "#073F31" }}>
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white">Bring Your Science to Life</h2>
            <p className="text-white/70 leading-relaxed">
              Free for educational use. No download needed. Start creating stunning scientific illustrations and animations right now.
            </p>
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-500 text-white px-10 py-6 text-lg"
              onClick={() => window.open("https://app.scillustrate.io", "_blank")}
            >
              Start Creating →
            </Button>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="py-20 px-6 bg-white">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Everything You Need to Illustrate Science</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Powerful tools designed specifically for scientific presentations and education</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { bg: "bg-emerald-50", color: "text-emerald-600", title: "300+ Scientific Illustrations", body: "Cells, organs, animals and more. Everything you need to visualize biological and scientific concepts accurately." },
              { bg: "bg-teal-50", color: "text-teal-600", title: "Intuitive Animation", body: "Create engaging animations with simple drag-and-drop tools. No animation experience required." },
              { bg: "bg-amber-50", color: "text-amber-600", title: "Video Export", body: "Export animations as high-quality videos for any platform, conference or presentation tool." },
              { bg: "bg-rose-50", color: "text-rose-600", title: "Easy Sharing", body: "Share your scientific stories with colleagues, professors and the world in seconds." },
              { bg: "bg-violet-50", color: "text-violet-600", title: "User-Friendly", body: "Built for scientists, students and educators. Simple interface, powerful results for every level." },
              { bg: "bg-blue-50", color: "text-blue-600", title: "Google Slides Integration 🔜", body: "Coming soon: seamlessly embed your animations directly into Google Slides presentations with one click." },
            ].map(({ bg, color, title, body }) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <span className={`text-xl ${color}`}>✦</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ── ABOUT ── */}
        <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">About Scillustrate</h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-10">
            We're building the platform you dreamed of with a vast library of hand-crafted scientific illustrations and intuitive animation tools, so researchers and educators can bring their science to life.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {[
              { title: "Our Mission", body: "Make visual scientific communication accessible to every scientist, student and educator, without needing a design degree or an eye-watering budget." },
              { title: "Why We Built This", body: "Complex science deserves clear visuals. We saw researchers scrambling for funds to purchase illustration libraries or spending hours for figures and animations that should take minutes. Scillustrate changes that." },
              { title: "Who We Serve", body: "From students preparing presentation figures to professors building interactive course content, Scillustrate is built for the full scientific and educational community." },
              { title: "What Sets Us Apart", body: "The only platform combining 300+ scientific illustrations with timeline animation and direct video export, all in one tool. Many more exciting features coming soon, including Google Slides integration." },
              { title: "Proudly Human Made", body: "Every illustration in our library is hand-crafted by scientific illustrators, not AI-generated. Our visuals are thoughtfully designed to be clear, intuitive and true to the biology." },
            ].map(({ title, body }) => (
              <div key={title} className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-400">
                <h3 className="font-semibold text-emerald-800 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-center mb-12">Everything you need to know about using and referencing Scillustrate.</p>
            <div className="space-y-6">
              {([
                {
                  q: "Is Scillustrate free to use?",
                  a: <>Yes, Scillustrate is free to use and will always remain free for educational purposes with attribution. It is currently also free for publishing purposes with attribution. Commercial use is not permitted. For full details, please read our <a href="/terms" className="text-emerald-600 hover:underline">Terms of Use</a>.</>,
                },
                {
                  q: "How should I reference Scillustrate?",
                  a: "Please include a short credit in your figure caption, for example: \"Illustration created with Scillustrate\" or \"Animation created with Scillustrate\".",
                },
                {
                  q: "Can I use Scillustrate for a published journal article?",
                  a: "Scillustrate is completely free to use for publications right now, with attribution. Please include a credit in your figure caption or methods section.",
                },
                {
                  q: "Can I use Scillustrate for a thesis, poster or grant application?",
                  a: "Scillustrate is completely free to use right now, including for theses, posters, presentations and grant applications. Please use the attribution in your figure captions.",
                },
              ] as { q: string; a: React.ReactNode }[]).map(({ q, a }) => (
                <div key={q} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── ACKNOWLEDGEMENTS ── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Acknowledgements</p>
          <p className="text-slate-600 leading-relaxed mb-10">
            We gratefully acknowledge the Balliol Interdisciplinary Institute, Balliol College, University of Oxford, which supported this project.
          </p>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Balliol-crest-CMYK-large-1.jpg"
              alt="Balliol College, University of Oxford"
              className="h-32 w-auto"
            />
          </div>
        </div>
      </section>

      <footer style={{ background: "#0f172a" }} className="text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <Logo className="h-6" />
            <div className="flex gap-6 flex-wrap justify-center">
              {navItems.map(({ key, label }) => (
                <button key={key} onClick={() => scrollToSection(key)} className="text-white/40 text-xs hover:text-white/70 transition-colors">
                  {label}
                </button>
              ))}
              <a href="/contact" className="text-white/40 text-xs hover:text-white/70 transition-colors">Contact</a>
              <a href="/terms" className="text-white/40 text-xs hover:text-white/70 transition-colors">Terms</a>
            </div>
            <p className="text-white/30 text-xs">© 2026 Scillustrate</p>
          </div>
          {/* Legal line */}
          <p className="text-white/20 text-xs text-center">
            Scillustrate is a trading name of Science Visuals Ltd, registered in England and Wales · Company no. 15029766 · 128 City Road, London, EC1V 2NX
          </p>
        </div>
      </footer>
    </div>
  );
}