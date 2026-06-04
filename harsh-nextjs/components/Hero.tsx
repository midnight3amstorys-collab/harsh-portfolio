"use client";
import { useEffect, useRef, useState } from "react";
import { Download, Mail, Linkedin, ChevronDown, ArrowRight, MapPin, Phone } from "lucide-react";

const stats = [
  { num: "7+", label: "Years Experience" },
  { num: "2500+", label: "Users Managed" },
  { num: "4", label: "Industries Served" },
  { num: "3", label: "App Store ★★★★★ Reviews" },
];

const floatingCards = [
  {
    icon: "✅",
    title: "Customer Onboarding",
    sub: "RentOK · Bengaluru",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/20",
    cls: "float-1 top-24 right-8 md:right-24",
  },
  {
    icon: "📋",
    title: "PRD Documentation",
    sub: "Product Ops · Feb 2026",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    cls: "float-2 top-64 right-4 md:right-8",
  },
  {
    icon: "📊",
    title: "MIS Reporting",
    sub: "Finance · Shubsan Group",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    cls: "float-3 bottom-40 right-16 md:right-32",
  },
  {
    icon: "🚀",
    title: "SaaS Adoption",
    sub: "2500+ Users Trained",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    cls: "float-4 bottom-20 right-4 md:right-12",
  },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient grid-bg"
    >
      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sky-500/30 text-sky-400 text-xs font-semibold mb-8 shadow-lg shadow-sky-500/5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <MapPin size={12} />
              Bengaluru, Karnataka · Open to Opportunities
            </div>

            {/* Name */}
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-white">Harsh</span>
              <br />
              <span className="gradient-text">Kumar</span>
              <br />
              <span className="text-white">Tulsyan</span>
            </h1>

            {/* Role */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Customer Success Manager", "SaaS Operations", "Product Ops", "Finance & Accounts"].map((r) => (
                <span
                  key={r}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                >
                  {r}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
              &ldquo;Helping SaaS and operations teams turn{" "}
              <span className="text-sky-400 font-medium">customer problems</span> into{" "}
              <span className="text-violet-400 font-medium">product clarity</span>, better workflows, and
              measurable outcomes.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="/Harsh_Kumar_Tulsyan_CV.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-sky-500/20"
              >
                <Download size={15} /> Download CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-sky-500/40 hover:bg-white/5 transition-all"
              >
                <Mail size={15} /> Contact Me
              </a>
              <a
                href="https://linkedin.com/in/harsh-tulsyan-3ab03023b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-sky-400 font-semibold text-sm hover:border-sky-500/40 transition-all"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              <a href="tel:+918944096080" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                <Phone size={12} /> +91 89440 96080
              </a>
              <a href="mailto:htulsyan2016@gmail.com" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                <Mail size={12} /> htulsyan2016@gmail.com
              </a>
            </div>
          </div>

          {/* Right — Floating UI Cards (desktop) */}
          <div className="hidden lg:block relative h-[520px]">
            {floatingCards.map((c) => (
              <div
                key={c.title}
                className={`absolute ${c.cls} glass gradient-border rounded-2xl p-4 w-52 shadow-2xl bg-gradient-to-br ${c.color} border ${c.border}`}
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-sm font-semibold text-white">{c.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{c.sub}</div>
              </div>
            ))}

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/20 border border-sky-500/20 flex items-center justify-center shadow-2xl glow-blue">
              <div className="text-center">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>H</div>
                <div className="text-[10px] text-sky-400 font-semibold tracking-widest">CSM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center border border-white/5 hover:border-sky-500/20 transition-all group">
              <div className="text-2xl font-black gradient-text group-hover:scale-105 transition-transform" style={{ fontFamily: "'Syne', sans-serif" }}>
                {s.num}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
