"use client";
import { ArrowRight } from "lucide-react";

const workflow = [
  { step: "01", label: "Customer Issue", icon: "🗣️", desc: "Real customer pain point identified" },
  { step: "02", label: "Root Cause", icon: "🔍", desc: "Diagnosis — product, data, or process?" },
  { step: "03", label: "Requirement Note", icon: "📝", desc: "Structured note / user story written" },
  { step: "04", label: "Product Discussion", icon: "💬", desc: "Aligned with product/tech team" },
  { step: "05", label: "UAT Feedback", icon: "🧪", desc: "Tested and feedback documented" },
  { step: "06", label: "Release", icon: "🚀", desc: "Change shipped and monitored" },
  { step: "07", label: "Customer Communication", icon: "✅", desc: "Customer informed, loop closed" },
];

export default function ProductOps() {
  return (
    <section id="product-ops" className="section-pad relative bg-[#0d0d14]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-3">
            Product Operations
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            From Customer Problems
            <br />
            <span className="gradient-text">to Product Clarity</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            My current work goes beyond support. I identify repeated pain points, document workflow issues,
            convert feedback into structured notes, coordinate with product teams, support UAT, and help
            improve customer-facing journeys.
          </p>
        </div>

        {/* Workflow */}
        <div className="flex flex-wrap justify-center items-start gap-2 md:gap-3 mb-12">
          {workflow.map((w, i) => (
            <div key={w.step} className="flex items-center gap-2">
              <div className="glass rounded-2xl p-4 text-center w-28 md:w-32 border border-violet-500/15 hover:border-violet-500/40 transition-all hover:scale-105 group cursor-default">
                <div className="text-xl mb-1">{w.icon}</div>
                <div className="text-[10px] text-violet-400 font-bold mb-1">{w.step}</div>
                <div className="text-xs font-semibold text-white leading-tight group-hover:text-violet-300 transition-colors">
                  {w.label}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 leading-snug hidden md:block">{w.desc}</div>
              </div>
              {i < workflow.length - 1 && (
                <ArrowRight size={14} className="text-violet-500/50 shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Impact cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: "RentOK Onboarding & Adoption",
              problem: "New property operators struggled with rent-cycle config and tenant data setup.",
              role: "Customer Success Manager",
              action: "Built custom onboarding flows, conducted live training, resolved edge cases in real time.",
              impact: "Faster time-to-value; smooth transitions from legacy tools to RentOK.",
              color: "sky",
            },
            {
              title: "Product Feedback → PRD Docs",
              problem: "Recurring product gaps were not reaching the tech team in a structured format.",
              role: "CS to Product Bridge",
              action: "Converted support tickets into user stories, requirement notes, and sprint backlog inputs.",
              impact: "Improved product iteration speed and reduced repeat support issues.",
              color: "violet",
            },
            {
              title: "Finance & Settlement Workflows",
              problem: "Operators had confusion around ledger entries, deposit handling, and settlement flows.",
              role: "Finance-Aware CSM",
              action: "Reviewed passbooks, clarified accounting logic, and escalated bugs with precise documentation.",
              impact: "Reduced settlement disputes; higher trust in platform transparency.",
              color: "emerald",
            },
            {
              title: "High-Volume User Training",
              problem: "2500+ users needed consistent guidance across diverse property types and workflows.",
              role: "Trainer & Community Manager",
              action: "Ran live sessions, managed WhatsApp groups, created FAQs and workflow guides.",
              impact: "High product adoption and positive App Store reviews with direct name mentions.",
              color: "amber",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`glass rounded-2xl p-5 border border-${card.color}-500/20 hover:border-${card.color}-500/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]`}
            >
              <h3 className="text-sm font-bold text-white mb-3 leading-snug">{card.title}</h3>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div>
                  <span className="text-slate-500 font-semibold block">Problem</span>
                  {card.problem}
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block">My Role</span>
                  <span className="text-sky-400">{card.role}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block">Actions</span>
                  {card.action}
                </div>
                <div>
                  <span className="text-emerald-400 font-semibold block">Impact ✓</span>
                  {card.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
