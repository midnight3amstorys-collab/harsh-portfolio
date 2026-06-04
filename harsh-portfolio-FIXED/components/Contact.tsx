"use client";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Whether you&apos;re a recruiter, a SaaS company, or someone who wants to discuss customer success,
          product operations, or finance workflows — I&apos;m happy to talk.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "📧", label: "Email", value: "htulsyan2016@gmail.com", href: "mailto:htulsyan2016@gmail.com", color: "sky" },
            { icon: "📞", label: "Phone", value: "+91 89440 96080", href: "tel:+918944096080", color: "violet" },
            { icon: "🔗", label: "LinkedIn", value: "harsh-tulsyan-3ab03023b", href: "https://linkedin.com/in/harsh-tulsyan-3ab03023b/", color: "indigo" },
            { icon: "📍", label: "Location", value: "Bengaluru, Karnataka, India", href: "#", color: "emerald" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-sky-500/30 transition-all group hover:scale-[1.02] text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{c.label}</p>
                  <p className="text-sm text-white font-semibold group-hover:text-sky-400 transition-colors truncate max-w-[200px]">
                    {c.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href="/Harsh_Kumar_Tulsyan_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold hover:opacity-90 hover:scale-105 transition-all shadow-2xl shadow-sky-500/20 text-sm"
        >
          ⬇️ Download My CV
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
        <p>
          © 2026 Harsh Kumar Tulsyan · Bengaluru, India ·{" "}
          <a href="mailto:htulsyan2016@gmail.com" className="hover:text-sky-400 transition-colors">
            htulsyan2016@gmail.com
          </a>
        </p>
        <p className="mt-1 text-slate-700">Built for recruiters · Open to CSM, SaaS Ops, Product Ops & Finance Ops roles</p>
      </footer>
    </section>
  );
}
