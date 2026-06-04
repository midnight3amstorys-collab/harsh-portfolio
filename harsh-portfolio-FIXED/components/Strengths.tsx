"use client";

const strengths = [
  { icon: "🤝", title: "Customer Success & Onboarding", desc: "End-to-end post-sales journey from setup to adoption", color: "sky" },
  { icon: "🛡️", title: "SaaS Support & Escalation", desc: "Resolving complex product and workflow escalations", color: "violet" },
  { icon: "🔍", title: "Product Feedback & Bug Triage", desc: "Converting customer pain points into structured reports", color: "indigo" },
  { icon: "📝", title: "PRD & Requirement Docs", desc: "Writing user stories, PRDs, and Markdown documentation", color: "sky" },
  { icon: "🧪", title: "UAT Feedback & Workflow Testing", desc: "End-to-end product testing and feedback loops", color: "violet" },
  { icon: "🏠", title: "Property & Tenant Data Mgmt", desc: "Room, bed, tenant, rent-cycle, deposit configuration", color: "emerald" },
  { icon: "💸", title: "Rent, Dues & Collections", desc: "Rent generation, dues tracking, collection workflows", color: "amber" },
  { icon: "📒", title: "Settlement & Ledger Review", desc: "Passbook, ledger, refunds, deposit reconciliation", color: "rose" },
  { icon: "📊", title: "MIS Reporting & Excel Analysis", desc: "Excel-based MIS, dashboards, financial reporting", color: "sky" },
  { icon: "🧾", title: "TDS, GST & Statutory Support", desc: "Compliance filings, registrations, notice handling", color: "violet" },
  { icon: "📂", title: "Accounting & Financial Closing", desc: "Month-end close, audit support, financial statements", color: "indigo" },
  { icon: "🏋️", title: "Client Training & Communication", desc: "Live sessions, WhatsApp groups, 2500+ users handled", color: "emerald" },
];

const colorMap: Record<string, string> = {
  sky: "from-sky-500/15 to-sky-500/5 border-sky-500/20 hover:border-sky-500/40",
  violet: "from-violet-500/15 to-violet-500/5 border-violet-500/20 hover:border-violet-500/40",
  indigo: "from-indigo-500/15 to-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/40",
  emerald: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40",
  amber: "from-amber-500/15 to-amber-500/5 border-amber-500/20 hover:border-amber-500/40",
  rose: "from-rose-500/15 to-rose-500/5 border-rose-500/20 hover:border-rose-500/40",
};

export default function Strengths() {
  return (
    <section id="skills" className="section-pad relative bg-[#0d0d14]">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">What I Bring</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Core <span className="gradient-text">Strengths</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            A rare combination of SaaS customer success, product operations, and finance expertise — all
            built from real work experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {strengths.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-5 bg-gradient-to-br ${colorMap[s.color]} border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-default group`}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
