/**
 * PRICING V1 BACKUP
 * This is the original subscription-based pricing section (Education/Industry tiers).
 * To restore it, replace the <section id="pricing"> block in app/page.tsx with this content.
 * You will also need to restore these state variables in the Home component:
 *   const [annualBilling, setAnnualBilling] = useState(true);
 *   const [industryPricing, setIndustryPricing] = useState(false);
 */

/*
        <section id="pricing" className="py-20 px-6 bg-slate-50">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Simple, transparent pricing</h2>
            <p className="text-slate-500 text-lg">Choose the plan that fits your workflow. Upgrade or cancel anytime.</p>
          </div>

          {/* Education / Industry toggle *\/}
          <div className="flex justify-center mb-8">
            <div className="flex bg-slate-200 rounded-full p-1">
              <button
                onClick={() => setIndustryPricing(false)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!industryPricing ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"}`}
              >
                🎓 Education
              </button>
              <button
                onClick={() => setIndustryPricing(true)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${industryPricing ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"}`}
              >
                🏢 Industry
              </button>
            </div>
          </div>

          {/* Education note *\/}
          {!industryPricing && (
            <p className="text-center text-slate-500 text-sm -mt-4 mb-6">
              Education pricing requires verification of an academic email address at checkout. Annual re-verification is required to maintain eligibility.{" "}
              <a href="mailto:hello@scillustrate.io" className="text-emerald-700 hover:underline">
                Questions? Get in touch.
              </a>
            </p>
          )}

          {/* Annual / Monthly toggle *\/}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className={`text-sm ${!annualBilling ? "text-slate-900 font-medium" : "text-slate-400"}`}>Monthly</span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative w-12 h-7 rounded-full transition-colors ${annualBilling ? "bg-emerald-500" : "bg-slate-300"}`}
            >
              <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${annualBilling ? "left-6" : "left-1"}`} />
            </button>
            <span className={`text-sm ${annualBilling ? "text-slate-900 font-medium" : "text-slate-400"}`}>Annual</span>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Save 20%</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {/* Free *\/}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="text-lg font-bold text-slate-900">Free</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">For students and learners exploring scientific illustration.</p>
              <div className="text-4xl font-bold text-slate-900 mb-5">Free</div>
              <ul className="space-y-2 text-sm text-slate-600 mb-7 flex-1">
                {["All illustrations from library", "Up to 10 slides for animations", "Up to 10 projects", "PNG & MP4 export"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>{f}</li>
                ))}
                {["Unlimited slides", "Unlimited projects", "Google Slides integration", "Collaboration tools", "Publication rights"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-300"><span className="w-4 h-4 flex items-center justify-center text-slate-300">–</span>{f}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-emerald-400 text-emerald-700 hover:bg-emerald-50" onClick={() => window.open(WAITLIST_URL, "_blank")}>
                Get Started Free
              </Button>
            </div>

            {/* Researcher — education vs industry *\/}
            {!industryPricing ? (
              <div className="bg-white border-2 border-emerald-500 rounded-2xl p-7 flex flex-col relative">
                <div className="absolute -top-3 left-0 right-0 flex justify-center gap-2">
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</span>
                  <span className="bg-amber-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">🚀 Launch Offer</span>
                </div>
                <div className="text-2xl mb-2">🔬</div>
                <h3 className="text-lg font-bold text-slate-900">Researcher</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">For scientists and postdocs who need unlimited animations and exports.</p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-slate-900">{annualBilling ? "£4" : "£5"}</span>
                  <span className="text-slate-400 text-sm ml-1">{annualBilling ? "/ month, billed annually" : "/ month"}</span>
                </div>
                <p className="text-slate-400 text-xs mb-4"><span className="line-through">{annualBilling ? "Regular £6" : "Regular £8"} / month</span></p>
                <ul className="space-y-2 text-sm text-slate-600 mb-7 flex-1">
                  {["All illustrations from library", "Unlimited slides for animations", "Unlimited projects", "PNG & MP4 export", "Google Slides integration (coming soon)", "Publication rights included"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>{f}</li>
                  ))}
                  {["Collaboration tools"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-300"><span className="w-4 h-4 flex items-center justify-center text-slate-300">–</span>{f}</li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.open(WAITLIST_URL, "_blank")}>Join Waitlist</Button>
              </div>
            ) : (
              <div className="bg-white border-2 border-emerald-500 rounded-2xl p-7 flex flex-col relative">
                <div className="absolute -top-3 left-0 right-0 flex justify-center gap-2">
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</span>
                  <span className="bg-amber-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">🚀 Launch Offer</span>
                </div>
                <div className="text-2xl mb-2">🔬</div>
                <h3 className="text-lg font-bold text-slate-900">Researcher</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">For industry researchers who need unlimited animations and exports.</p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-slate-900">{annualBilling ? "£25" : "£30"}</span>
                  <span className="text-slate-400 text-sm ml-1">{annualBilling ? "/ month, billed annually" : "/ month"}</span>
                </div>
                <p className="text-slate-400 text-xs mb-4"><span className="line-through">{annualBilling ? "Regular £30" : "Regular £36"} / month</span></p>
                <ul className="space-y-2 text-sm text-slate-600 mb-7 flex-1">
                  {["All illustrations from library", "Unlimited slides for animations", "Unlimited projects", "PNG & MP4 export", "Google Slides integration (coming soon)", "Publication rights included"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>{f}</li>
                  ))}
                  {["Collaboration tools"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-300"><span className="w-4 h-4 flex items-center justify-center text-slate-300">–</span>{f}</li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.open(WAITLIST_URL, "_blank")}>Join Waitlist</Button>
              </div>
            )}

            {/* Lab (education) / Group (industry) *\/}
            {!industryPricing ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">🚀 Launch Offer</div>
                <div className="text-2xl mb-2">🧪</div>
                <h3 className="text-lg font-bold text-slate-900">Lab</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">For research labs needing team access. 10 seats included.</p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-slate-900">{annualBilling ? "£29" : "£35"}</span>
                  <span className="text-slate-400 text-sm ml-1">{annualBilling ? "/ month, billed annually" : "/ month"}</span>
                </div>
                <p className="text-slate-400 text-xs mb-1"><span className="line-through">{annualBilling ? "Regular £36" : "Regular £45"} / month</span></p>
                <p className="text-emerald-600 text-xs font-medium mb-4">= £{annualBilling ? "2.90" : "3.50"} / seat / month · 10 seats</p>
                <ul className="space-y-2 text-sm text-slate-600 mb-7 flex-1">
                  {[
                    "All illustrations from library", "Unlimited slides for animations", "Unlimited projects",
                    "PNG & MP4 export", "Google Slides integration (coming soon)", "Publication rights included", "Team collaboration tools",
                    ...(annualBilling ? ["5 custom icons as a one-time bonus (worth £250) ✨"] : []),
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>{f}</li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.open(WAITLIST_URL, "_blank")}>Join Waitlist</Button>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">🚀 Launch Offer</div>
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="text-lg font-bold text-slate-900">Group</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">For industry teams. 5 seats included, add more as you grow.</p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-slate-900">{annualBilling ? "£99" : "£119"}</span>
                  <span className="text-slate-400 text-sm ml-1">{annualBilling ? "/ month, billed annually" : "/ month"}</span>
                </div>
                <p className="text-slate-400 text-xs mb-1"><span className="line-through">{annualBilling ? "Regular £125" : "Regular £150"} / month</span></p>
                <p className="text-emerald-600 text-xs font-medium mb-1">= £{annualBilling ? "19.80" : "23.80"} / seat / month · 5 seats</p>
                <p className="text-slate-400 text-xs mb-4">+£{annualBilling ? "15" : "18"} / month per additional seat</p>
                <ul className="space-y-2 text-sm text-slate-600 mb-7 flex-1">
                  {["All illustrations from library", "Unlimited slides for animations", "Unlimited projects", "PNG & MP4 export", "Google Slides integration (coming soon)", "Publication rights included", "Team collaboration tools"].map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">✓</span>{f}</li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.open(WAITLIST_URL, "_blank")}>Join Waitlist</Button>
              </div>
            )}

            {/* Enterprise *\/}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 flex flex-col">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="text-lg font-bold text-white">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">For institutions and universities needing custom seats, branding, and controls.</p>
              <div className="text-4xl font-bold text-white mb-5">Custom</div>
              <ul className="space-y-2 text-sm text-slate-300 mb-7 flex-1">
                {["Everything in Lab / Group", "Custom number of seats", "Admin dashboard", "Custom branding", "Priority support & SLA", "Usage analytics", "Invoiced billing", "Dedicated onboarding"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-emerald-400 text-xs">✓</span>{f}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full bg-white text-slate-900 border-white hover:bg-slate-100">
                Contact Sales
              </Button>
            </div>

          </div>
          <p className="text-center text-slate-400 text-xs mt-6">All prices excl. VAT. Academic discounts available — contact us.</p>
        </section>
*/
