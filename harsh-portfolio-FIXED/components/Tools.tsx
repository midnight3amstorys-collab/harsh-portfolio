"use client";

const toolGroups = [
  {
    category: "AI & Productivity",
    icon: "🤖",
    color: "sky",
    tools: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity", "OpenAI", "Cursor", "Codex", "Whisk"],
  },
  {
    category: "Product & Design",
    icon: "🎨",
    color: "violet",
    tools: ["Figma", "Canva", "Loom", "Notion", "Lovable.dev", "MotionSites.ai"],
  },
  {
    category: "SaaS Operations",
    icon: "⚙️",
    color: "indigo",
    tools: ["Lark", "Slack", "MSG91", "Postman", "Metabase", "Google Drive", "Google Antigravity"],
  },
  {
    category: "Reporting & Finance",
    icon: "📊",
    color: "emerald",
    tools: ["Microsoft Excel", "Google Sheets", "Tally Prime", "Tally ERP 9", "Winman TDS", "MS Word", "PowerPoint", "Outlook"],
  },
  {
    category: "Automation & No-Code",
    icon: "🔄",
    color: "amber",
    tools: ["n8n", "Lovable.dev", "MotionSites.ai", "Google Antigravity"],
  },
  {
    category: "Developer & Deployment",
    icon: "🚀",
    color: "rose",
    tools: ["GitHub", "Vercel", "OneCompiler", "Skies"],
  },
];

const colorMap: Record<string, { card: string; tag: string; icon: string }> = {
  sky: { card: "border-sky-500/20 hover:border-sky-500/40", tag: "bg-sky-500/10 text-sky-300 border-sky-500/20", icon: "bg-sky-500/20 text-sky-400" },
  violet: { card: "border-violet-500/20 hover:border-violet-500/40", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20", icon: "bg-violet-500/20 text-violet-400" },
  indigo: { card: "border-indigo-500/20 hover:border-indigo-500/40", tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20", icon: "bg-indigo-500/20 text-indigo-400" },
  emerald: { card: "border-emerald-500/20 hover:border-emerald-500/40", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", icon: "bg-emerald-500/20 text-emerald-400" },
  amber: { card: "border-amber-500/20 hover:border-amber-500/40", tag: "bg-amber-500/10 text-amber-300 border-amber-500/20", icon: "bg-amber-500/20 text-amber-400" },
  rose: { card: "border-rose-500/20 hover:border-rose-500/40", tag: "bg-rose-500/10 text-rose-300 border-rose-500/20", icon: "bg-rose-500/20 text-rose-400" },
};

export default function Tools() {
  return (
    <section id="tools" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Tools <span className="gradient-text">Universe</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm max-w-lg mx-auto">
            Comfortable across AI tools, SaaS platforms, finance software, no-code builders, and developer
            utilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolGroups.map((g) => {
            const c = colorMap[g.color];
            return (
              <div
                key={g.category}
                className={`glass rounded-2xl p-5 border ${c.card} transition-all duration-300 hover:shadow-xl hover:scale-[1.01]`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${c.icon}`}>
                    {g.icon}
                  </span>
                  <h3 className="text-sm font-bold text-white">{g.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.tools.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${c.tag} hover:scale-105 transition-transform cursor-default`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
