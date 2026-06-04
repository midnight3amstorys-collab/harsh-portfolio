"use client";

const experiences = [
  {
    company: "RentOK",
    role: "Customer Success Manager",
    period: "May 2025 – Present",
    location: "Bengaluru, India",
    current: true,
    color: "sky",
    description:
      "Managing post-sales customer success for property owners, operators and staff across RentOK's property-management SaaS platform.",
    highlights: [
      "Onboarding & data setup: property configuration, tenant profiles, room/bed inventory, rent-cycle logic",
      "Financial workflows: dues, collections, deposit, refunds, settlement review, passbook/ledger, receipts",
      "Product coordination: e-KYC/agreement, notifications, bank-linking, bulk uploads, rent generation",
      "Sales support: demos, objection handling, renewal coordination, account relationship management",
      "Live training & doubt-clearing sessions; WhatsApp/user-group management at 2,500+ user scale",
      "Since Feb 2026: PRD/Markdown docs, user stories, sprint backlog inputs, UAT feedback & bug triage",
      "Product journey mapping and support-to-product feedback loops for PMF improvement",
    ],
    tags: ["Customer Success", "Product Ops", "SaaS Workflows", "PRD Docs", "UAT", "Training", "Bug Triage"],
  },
  {
    company: "Shubsan Hospitality Services LLP",
    role: "Accounts Manager",
    period: "Jan 2024 – May 2025",
    location: "Bengaluru, India",
    current: false,
    color: "violet",
    description:
      "Finance and accounts management for hospitality, real-estate, manufacturing, and food group operations.",
    highlights: [
      "Project budgets, cash-flow projections, and management reports for group operations",
      "TDS workings and filing through Winman, statutory dues, payroll, banking coordination",
      "Financial data analysis for decision-making, revenue management, and cost control",
      "Financial closing, MIS reporting, statutory/internal audit, and management reporting",
      "Supervised junior staff; coordinated with internal teams, auditors, and management",
    ],
    tags: ["TDS/GST", "MIS Reporting", "Budgeting", "Audit Support", "Payroll", "Tally"],
    note: "Clients: Shubsan Realty Venture, Shubsan Propman Pvt. Ltd., Barbarik World Wide Ltd., Shubsan Foods & Beverages",
  },
  {
    company: "Shubsan Hospitality Services LLP",
    role: "Accounts Executive",
    period: "Jun 2021 – Dec 2023",
    location: "Bengaluru, India",
    current: false,
    color: "indigo",
    description: "Day-to-day accounting and finance operations support.",
    highlights: [
      "Maintained accounting records using Tally, ERP systems and Winman",
      "Reconciliations, bookkeeping, GST/TDS support, and compliance tasks",
      "Supported senior staff in documentation, reporting and special assignments",
    ],
    tags: ["Tally Prime", "ERP", "Bookkeeping", "Reconciliation"],
  },
  {
    company: "Sourav Dutta, Advocate",
    role: "Senior Accounts Executive",
    period: "Jan 2018 – Sep 2020",
    location: "Purulia, India",
    current: false,
    color: "emerald",
    description:
      "Accounting and tax-filing support for an Advocate empanelled with Central Bank of India.",
    highlights: [
      "Tax filing for individuals, HUFs, and companies; GST compliance and registrations",
      "Income-tax notice support, scrutiny documentation, financial statement preparation",
      "Land-registration, marriage-certificate applications, and legal documentation",
    ],
    tags: ["GST", "Income Tax", "Financial Statements", "Legal Docs"],
  },
  {
    company: "Tadsmedia",
    role: "Accounts Manager / Digital Marketing Ops",
    period: "Aug 2021 – May 2022",
    location: "Chandigarh, India",
    current: false,
    color: "amber",
    description: "Campaign operations and digital marketing for a 500+ brands agency.",
    highlights: [
      "Campaign planning, traffic generation, and conversion-focused digital marketing",
      "Performance coordination across multiple brand categories",
    ],
    tags: ["Digital Marketing", "Campaign Ops"],
  },
];

const colorMap: Record<string, { dot: string; badge: string; border: string }> = {
  sky: { dot: "bg-sky-500", badge: "bg-sky-500/10 text-sky-400 border-sky-500/20", border: "border-sky-500/30" },
  violet: { dot: "bg-violet-500", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", border: "border-violet-500/30" },
  indigo: { dot: "bg-indigo-500", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", border: "border-indigo-500/30" },
  emerald: { dot: "bg-emerald-500", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", border: "border-emerald-500/30" },
  amber: { dot: "bg-amber-500", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", border: "border-amber-500/30" },
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              return (
                <div key={i} className="relative pl-14 md:pl-20">
                  {/* Dot */}
                  <div
                    className={`absolute left-[14px] md:left-[26px] top-5 w-4 h-4 rounded-full ${c.dot} border-4 border-[#0a0a0f] shadow-lg z-10 ${exp.current ? "animate-pulse" : ""}`}
                  />

                  {/* Card */}
                  <div className={`glass rounded-2xl p-6 border ${c.border} hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-semibold`} style={{ color: exp.color === "sky" ? "#38bdf8" : exp.color === "violet" ? "#a78bfa" : exp.color === "emerald" ? "#34d399" : exp.color === "amber" ? "#fbbf24" : "#818cf8" }}>
                          {exp.company}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{exp.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${c.badge}`}>
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 mb-4">{exp.description}</p>

                    {exp.note && (
                      <p className="text-xs text-slate-500 mb-4 italic">{exp.note}</p>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-sky-500 mt-1 shrink-0">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${c.badge}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
