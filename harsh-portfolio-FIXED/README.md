# Harsh Kumar Tulsyan — Portfolio Website

Premium Next.js portfolio website for Harsh Kumar Tulsyan.
Customer Success Manager | SaaS Operations | Product Operations | Finance & Accounts

---

## 🚀 Deploy to Vercel (Fastest Method — 3 Steps)

### Option A: GitHub + Vercel (Recommended)

1. **Create a GitHub repository**
   - Go to github.com → New Repository → Name it `harsh-portfolio`
   - Upload all these files (drag & drop the entire folder)

2. **Connect to Vercel**
   - Go to vercel.com → Sign Up / Log in (use GitHub)
   - Click "Add New Project" → Import your GitHub repo
   - Framework preset: **Next.js** (auto-detected)
   - Click **Deploy**
   - Live in ~60 seconds ✅

3. **Custom Domain (Optional)**
   - In Vercel project settings → Domains
   - Add a custom domain or use the free `.vercel.app` URL

---

### Option B: Direct Upload (No GitHub Needed)

1. Install Node.js from nodejs.org (v18 or higher)
2. Open terminal in this project folder
3. Run:
   ```bash
   npm install
   npm run build
   ```
4. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
5. Deploy:
   ```bash
   vercel --prod
   ```
6. Follow the prompts → get your live URL ✅

---

## 📁 Project Structure

```
harsh-nextjs/
├── app/
│   ├── globals.css          ← All styles, animations, CSS variables
│   ├── layout.tsx           ← SEO metadata, fonts, OpenGraph
│   └── page.tsx             ← Main page assembling all sections
├── components/
│   ├── Navbar.tsx           ← Sticky nav with Download CV button
│   ├── Hero.tsx             ← Cinematic hero with floating cards + stats
│   ├── About.tsx            ← About me + expertise pillars
│   ├── Strengths.tsx        ← 12 core competency cards
│   ├── Experience.tsx       ← Animated vertical timeline
│   ├── ProductOps.tsx       ← Product workflow + case study cards
│   ├── Testimonials.tsx     ← Real App Store reviews (naming Harsh)
│   ├── Tools.tsx            ← Tools universe by category
│   ├── RecruiterValue.tsx   ← "Why hire me" + big CTA
│   ├── Education.tsx        ← Education + certifications
│   └── Contact.tsx          ← Contact links + footer
├── public/
│   ├── Harsh_Kumar_Tulsyan_CV.pdf    ← REPLACE with your actual CV
│   └── favicon.ico                   ← REPLACE with your favicon
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## 📄 Replace Your CV

1. Export your CV as PDF
2. Name it exactly: `Harsh_Kumar_Tulsyan_CV.pdf`
3. Drop it into the `/public/` folder
4. Redeploy → the Download CV button will work ✅

---

## 🖼️ Add a Profile Photo (Optional)

1. Name your photo: `profile.jpg`
2. Drop it into `/public/`
3. In `Hero.tsx`, add an `<Image>` component pointing to `/profile.jpg`

---

## ✏️ Edit Content

- **Experience, skills, tools** → Edit the respective component files in `/components/`
- **SEO title & description** → Edit `app/layout.tsx`
- **Colors** → Edit CSS variables in `app/globals.css`
- **Contact info** → Search for `htulsyan2016@gmail.com` and replace across components

---

## 🛠️ Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📞 Contact

Harsh Kumar Tulsyan  
htulsyan2016@gmail.com  
+91 89440 96080  
linkedin.com/in/harsh-tulsyan-3ab03023b/
