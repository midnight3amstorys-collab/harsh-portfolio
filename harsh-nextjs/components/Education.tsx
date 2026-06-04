"use client";

const education = [
  {
    degree: "MBA — Finance",
    institution: "Symbiosis School for Online & Digital Learning",
    year: "Dec 2023 · Currently Pursuing",
    icon: "🎓",
    current: true,
  },
  {
    degree: "B.Com",
    institution: "University of Calcutta",
    year: "2021 · 6.015 CGPA",
    icon: "📘",
    current: false,
  },
  {
    degree: "HSC (Class XII)",
    institution: "DSK DAV Public School, Purulia, W.B.",
    year: "2017 · 6.80 CGPA",
    icon: "📗",
    current: false,
  },
  {
    degree: "SSC (Class X)",
    institution: "DSK DAV Public School, Purulia, W.B.",
    year: "2015 · 5.60 CGPA",
    icon: "📕",
    current: false,
  },
];

const certs = [
  { name: "CA Foundation Examination", org: "ICAI", icon: "📊", color: "sky" },
  { name: "U.S. Career Catalyst — Audit Completion", org: "KPMG", icon: "🏢", color: "violet" },
  { name: "Facilities Management Virtual Experience", org: "CBRE", icon: "🏗️", color: "emerald" },
  { name: "Introduction to Microsoft Excel", org: "Coursera Project Network", icon: "📈", color: "amber" },
];

const certColor: Record<string, string> = {
  sky: "border-sky-500/20 hover:border-sky-500/40 bg-sky-500/5",
  violet: "border-violet-500/20 hover:border-violet-500/40 bg-violet-500/5",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40 bg-emerald-500/5",
  amber: "border-amber-500/20 hover:border-amber-500/40 bg-amber-500/5",
};

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Qualifications</h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className={`glass rounded-2xl p-5 border ${e.current ? "border-sky-500/30" : "border-white/5"} hover:border-sky-500/20 transition-all group`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{e.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{e.degree}</h4>
                        {e.current && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                            ONGOING
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{e.institution}</p>
                      <p className="text-xs text-sky-400 mt-1 font-medium">{e.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Certifications & Learning</h3>
            <div className="space-y-4">
              {certs.map((c) => (
                <div
                  key={c.name}
                  className={`rounded-2xl p-5 border transition-all hover:scale-[1.01] cursor-default ${certColor[c.color]}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{c.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{c.org}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
