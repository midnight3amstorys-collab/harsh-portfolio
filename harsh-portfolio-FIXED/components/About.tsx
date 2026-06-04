"use client";

const pillars = [
  { icon: "🎯", label: "Customer Success" },
  { icon: "⚙️", label: "SaaS Operations" },
  { icon: "📋", label: "Product Ops" },
  { icon: "💰", label: "Finance & Accounts" },
  { icon: "📊", label: "MIS Reporting" },
  { icon: "🤖", label: "AI & No-Code" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Where Business Logic
              <br />
              <span className="gradient-text">Meets Customer Empathy</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a customer-success and operations professional with a strong finance foundation and
                hands-on SaaS product exposure. My work connects{" "}
                <span className="text-sky-400 font-medium">customer support, product feedback, finance workflows,
                reporting, onboarding, and business operations.</span>
              </p>
              <p>
                At RentOK, I manage the entire post-sales journey — from property configuration and tenant
                onboarding to collections, settlements, and product escalations. Since February 2026, I also
                contribute to{" "}
                <span className="text-violet-400 font-medium">
                  PRD documentation, user stories, sprint inputs, and UAT feedback
                </span>{" "}
                — bridging the gap between customer pain and product improvement.
              </p>
              <p>
                I enjoy understanding business problems deeply, simplifying workflows, documenting requirements,
                coordinating with teams, and helping customers adopt products successfully.
              </p>
              <blockquote className="mt-6 pl-4 border-l-2 border-sky-500 italic text-slate-200 text-lg">
                &ldquo;I understand what a business wants — clear workflows, happy customers, clean data,
                better product adoption, and measurable outcomes.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right — pillars */}
          <div>
            <div className="glass rounded-3xl p-8 border border-white/8 glow-blue">
              <p className="text-sm text-slate-400 mb-6 font-medium">Core Expertise Areas</p>
              <div className="grid grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6 hover:border-sky-500/30 hover:bg-white/5 transition-all group cursor-default"
                  >
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key quote */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-sky-500/20">
                <p className="text-xs text-slate-400 mb-1">Currently at</p>
                <p className="text-white font-bold">RentOK · Bengaluru</p>
                <p className="text-sky-400 text-sm mt-0.5">Customer Success Manager</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">May 2025 – Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
