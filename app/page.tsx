"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  Zap,
  FlaskConical,
  Share2,
  Download,
  Presentation,
  ArrowRight,
  Microscope,
  Dna,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleNewsletterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeMHnLyJE6T5CjZm04DxiIIOWjp9uki0VAlUEepNDwLpWSxqg/viewform?usp=header",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Scillustrate
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={handleNewsletterClick}>
              Join Waitlist
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Request Demo
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative mx-auto px-6 pt-20 pb-32 overflow-hidden">
          <AnimatedBackground />
          <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              100+ Scientific Sprites Available
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900">
              Bring Your Science{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                To Life
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Create stunning scientific animations effortlessly. Perfect for
              scientists presenting complex concepts with clarity and visual
              impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6"
                onClick={handleNewsletterClick}
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />
              <div className="relative aspect-video bg-slate-100 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-4 text-slate-400">
                    <Microscope className="w-16 h-16" />
                    <Dna className="w-16 h-16" />
                    <Heart className="w-16 h-16" />
                  </div>
                  <p className="text-slate-500 font-medium">
                    Demo Preview Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Everything You Need to Illustrate Science
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Powerful tools designed specifically for scientific
                presentations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                    <FlaskConical className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    100+ Scientific Sprites
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Cells, organs, animals, and more. Everything you need to
                    visualize biological and scientific concepts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Intuitive Animation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Create complex animations with simple drag-and-drop. No
                    animation experience required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Presentation className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Google Slides Integration
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Seamlessly embed your animations directly into Google Slides
                    presentations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Download className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Video Export
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Export your animations as high-quality videos for any
                    platform or presentation tool.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Share2 className="w-7 h-7 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Easy Sharing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Share your scientific stories with classmates, teachers, and
                    the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-7 h-7 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Student-Friendly
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Built specifically for students. Simple interface, powerful
                    results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                  Coming Soon
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Be Among the First to Try Scillustrate
                </h2>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Join our waitlist and get early access when we launch. Plus,
                  exclusive resources and updates on new features.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-lg py-6"
                    onClick={handleNewsletterClick}
                  >
                    Join the Waitlist
                  </Button>
                </div>

                <p className="text-sm text-slate-500">
                  No spam, ever. Just updates on our launch and exclusive early
                  access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Perfect for Scientists
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're presenting in class, creating educational
                content, or explaining complex biological processes,
                Scillustrate gives you the tools to make your science
                presentations memorable and impactful.
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-12">
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-emerald-600">
                    100+
                  </div>
                  <div className="text-slate-600">Scientific Sprites</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-teal-600">2</div>
                  <div className="text-slate-600">Export Options</div>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-blue-600">∞</div>
                  <div className="text-slate-600">Creative Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold">Scillustrate</span>
            </div>
            <p className="text-slate-400 text-sm">
              Making science visual, one animation at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
