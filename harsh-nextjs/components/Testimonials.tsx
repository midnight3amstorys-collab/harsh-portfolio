"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    title: "Best Rental Property Manager App",
    rating: 5,
    reviewer: "Atul Tayal",
    company: "Tayal Rentals",
    date: "22 Sep 2025",
    source: "App Store",
    review:
      "We have been using RentOk since August 2025 to manage our rental properties. From the very beginning, the platform has been extremely reliable and efficient. We first onboarded only a part of our inventory to test it out, but the experience was so smooth that we quickly shifted all our properties to RentOk.",
    highlight:
      "A special thanks to Harsh Tulsyan (Customer Success Manager at RentOk), who guided us patiently and resolved all our queries with great professionalism. His constant support made the entire transition seamless and stress-free.",
    color: "sky",
  },
  {
    title: "Trust RentOk – The Best PG & Rental Management App",
    rating: 5,
    reviewer: "Rishy Singh",
    company: "Individual Property Owner",
    date: "1 Dec 2025",
    source: "App Store",
    review:
      "RentOk has made property and tenant management extremely smooth and hassle-free. The app is fast, reliable, and packed with powerful features like automated rent collection, payment reminders, digital agreements, and complete property tracking.",
    highlight:
      "The customer support team—especially Harsh—is excellent and always ready to help. The platform is highly secure, and settlements are transparent, which builds strong trust for both owners and tenants.",
    color: "violet",
  },
  {
    title: "To the Point Guidance",
    rating: 5,
    reviewer: "Beyond Stays",
    company: "Beyond Stays",
    date: "18 Sep 2025",
    source: "App Store",
    review:
      "We at Beyond Stays have been using RentOk, and our experience has been excellent. The platform is simple, efficient, and has made our operations much smoother. Features like tenant management, reminders, and payment tracking have truly saved us valuable time and effort.",
    highlight:
      "Special thanks to the RentOk team and Harsh Tulsyan (Customer Success Manager) for their constant support and quick responses whenever needed.",
    color: "emerald",
  },
];

const colorMap: Record<string, { ring: string; badge: string; quote: string }> = {
  sky: { ring: "border-sky-500/20 hover:border-sky-500/40", badge: "bg-sky-500/10 text-sky-400", quote: "text-sky-500/30" },
  violet: { ring: "border-violet-500/20 hover:border-violet-500/40", badge: "bg-violet-500/10 text-violet-400", quote: "text-violet-500/30" },
  emerald: { ring: "border-emerald-500/20 hover:border-emerald-500/40", badge: "bg-emerald-500/10 text-emerald-400", quote: "text-emerald-500/30" },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative bg-[#0d0d14]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Real <span className="gradient-text">Customer Reviews</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            These are genuine App Store reviews from RentOK customers — naming me directly for the support
            and guidance I provided. Real words, real impact.
          </p>
          {/* App Store badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
            <span className="text-base">🍎</span>
            Verified · Apple App Store Reviews
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const c = colorMap[t.color];
            return (
              <div
                key={i}
                className={`glass rounded-3xl p-6 border ${c.ring} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl testimonial-glow relative overflow-hidden`}
              >
                {/* Quote icon bg */}
                <Quote className={`absolute -top-2 -right-2 w-16 h-16 ${c.quote}`} />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs text-amber-400 font-semibold">{t.rating}.0</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-3 leading-snug">{t.title}</h3>

                {/* Review body */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{t.review}</p>

                {/* Highlighted mention */}
                <div className={`rounded-xl p-3 ${c.badge} bg-opacity-10 border border-current border-opacity-10 mb-4`}>
                  <p className="text-xs font-medium leading-relaxed">{t.highlight}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                  <div>
                    <p className="text-xs font-bold text-white">{t.reviewer}</p>
                    <p className="text-[11px] text-slate-500">{t.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-slate-500">{t.date}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.badge}`}>{t.source}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact callout */}
        <div className="mt-10 glass rounded-2xl p-6 border border-sky-500/20 text-center max-w-2xl mx-auto">
          <p className="text-slate-300 text-sm leading-relaxed">
            These reviews highlight my ability to drive{" "}
            <span className="text-sky-400 font-semibold">seamless onboarding</span>,{" "}
            <span className="text-violet-400 font-semibold">professional customer handling</span>, and{" "}
            <span className="text-emerald-400 font-semibold">real business trust</span> — not just resolve
            tickets, but build long-term relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
