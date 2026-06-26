// PRICING SECTION BACKUP — hidden at launch, restore when ready to charge
// To restore: paste the JSX below back into app/page.tsx inside <main>,
// re-add { key: "pricing", label: "Pricing" } to navItems,
// and restore "pricing" to the Section type and IntersectionObserver array.

/*
        {/* ── PRICING ── */}
        <section id="pricing" className="py-20 px-6 bg-slate-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Simple, transparent pricing</h2>
            <p className="text-slate-500 text-lg">Free to use. Pay only when you publish.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Free */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="text-lg font-bold text-slate-900">Educational Licence</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">For everyone. Create, animate and export with no subscription required.</p>
              <div className="text-4xl font-bold text-slate-900 mb-5">Free</div>
              <ul className="space-y-2 text-sm text-slate-600 mb-7 flex-1">
                {[
                  "Full access to the illustration library",
                  "Create and animate projects",
                  "High resolution export",
                  "Use in personal and educational contexts such as team presentations, protocols and lectures",
                ].map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-emerald-400 text-emerald-700 hover:bg-emerald-50" onClick={() => window.open("https://app.scillustrate.io", "_blank")}>
                Get Started Free
              </Button>
            </div>

            {/* Publication licence */}
            <div className="bg-white border-2 border-emerald-500 rounded-2xl p-7 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">🚀 Launch Offer</div>
              <div className="text-2xl mb-2">📄</div>
              <h3 className="text-lg font-bold text-slate-900">Publication Licence</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">Flexible licensing for every stage of academic publishing, from a single submission to your whole research group.</p>
              <div className="mb-5 space-y-3">
                {/* Tier 1 */}
                <div className="bg-slate-50 rounded-xl px-4 py-3">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Thesis, Poster, Conference Presentation or Grant Application</p>
                      <p className="text-xs text-slate-400">Per submission</p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-slate-900">£6.99</span>
                      <p className="text-xs text-slate-400 line-through">£9.99</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {[
                      "One thesis/dissertation",
                      "OR one conference poster/presentation",
                      "OR one grant application/proposal",
                    ].map(f => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="w-3 h-3 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[9px]">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tier 2 */}
                <div className="bg-emerald-50 rounded-xl px-4 py-3">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Publication</p>
                      <p className="text-xs text-slate-400">Per submission of one manuscript and/or its associated preprint</p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-emerald-700">£69.99</span>
                      <p className="text-xs text-slate-400 line-through">£99.99</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {["Peer-reviewed journal article", "Preprint submission", "All figures in that submission covered"].map(f => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="w-3 h-3 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[9px]">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tier 3 */}
                <div className="bg-teal-50 rounded-xl px-4 py-3">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Annual Bundle</p>
                      <p className="text-xs text-slate-400">Per research group of up to 10 people</p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-teal-700">£199</span>
                      <p className="text-xs text-slate-400 line-through">£249</p>
                      <p className="text-xs text-slate-400">/ year</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {["Unlimited submissions across all types", "All 10 group members covered", "12 months from purchase"].map(f => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="w-3 h-3 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[9px]">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5">All tiers include full library access and high-resolution export. Attribution to Scillustrate.io required.</p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.location.href = "/checkout"}>
                Get a Licence →
              </Button>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 flex flex-col">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="text-lg font-bold text-white">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">For institutions, universities and organisations needing team access and custom licensing.</p>
              <div className="text-4xl font-bold text-white mb-5">Custom</div>
              <ul className="space-y-2 text-sm text-slate-300 mb-7 flex-1">
                {[
                  "Team and lab access",
                  "Bulk publication licensing",
                  "Custom branding",
                  "Priority support",
                  "Invoiced billing",
                  "Dedicated onboarding",
                ].map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-slate-700 flex items-center justify-center text-emerald-400 text-xs">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full bg-white text-slate-900 border-white hover:bg-slate-100" onClick={() => window.location.href = "mailto:sales@scillustrate.io"}>
                Contact Sales
              </Button>
            </div>

          </div>
          <p className="text-center text-slate-400 text-xs mt-8">All prices incl. VAT. Questions? <a href="mailto:hello@scillustrate.io" className="hover:text-slate-600 underline">Get in touch.</a></p>
        </section>
*/
