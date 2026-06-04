"use client";

const values = [
  {
    icon: "🔗",
    title: "Rare Triple Combination",
    desc: "I bridge customer success, product operations, and finance — three domains most professionals have only one of.",
  },
  {
    icon: "🧠",
    title: "Business-First Thinking",
    desc: "I understand real business workflows, not just software screens. I think in terms of outcomes, not just tasks.",
  },
  {
    icon: "🎯",
    title: "End-to-End Ownership",
    desc: "I handle customers, document issues, train users, support product improvement, and close the loop — all in one role.",
  },
  {
    icon: "💰",
    title: "Finance Intelligence in SaaS",
    desc: "I bring accounting, MIS, TDS, GST, and operational finance understanding into every SaaS workflow I touch.",
  },
  {
    icon: "🤖",
    title: "AI-Ready Professional",
    desc: "I actively use Claude, ChatGPT, Gemini, Cursor, n8n, and no-code tools to move faster and deliver better results.",
  },
  {
    icon: "🤝",
    title: "True Cross-Functional Player",
    desc: "I work confidently with support, sales, product, tech, finance, and management teams — bridging gaps others can't.",
  },
];

export default function RecruiterValue() {
  return (
    <section id="why-me" className="section-pad bg-[#0d0d14] relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">For Recruiters</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Why Recruiters
            <br />
            <span className="gradient-text">Should Notice Me</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group cursor-default"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {v.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Big CTA banner */}
        <div className="glass rounded-3xl p-8 md:p-10 border border-sky-500/20 text-center glow-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-violet-500/5 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Looking for a Customer Success,{" "}
              <span className="gradient-text">SaaS Operations</span>, or Finance Ops role?
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm">
              Let&apos;s connect. I bring day-1 readiness, a finance foundation, product thinking, and the
              hunger to make customers successful.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:htulsyan2016@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-sky-500/20"
              >
                ✉️ Email Me
              </a>
              <a
                href="tel:+918944096080"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-sky-500/40 transition-all"
              >
                📞 Call Me
              </a>
              <a
                href="https://linkedin.com/in/harsh-tulsyan-3ab03023b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-sky-400 font-semibold text-sm hover:border-sky-500/40 transition-all"
              >
                🔗 LinkedIn
              </a>
              <a
                href="/Harsh_Kumar_Tulsyan_CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-violet-400 font-semibold text-sm hover:border-violet-500/40 transition-all"
              >
                ⬇️ Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
