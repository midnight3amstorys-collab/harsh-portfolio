import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Kumar Tulsyan | Customer Success Manager | SaaS Operations",
  description:
    "Customer Success Manager with 7+ years of experience in SaaS operations, product operations, finance, accounting, MIS reporting, and client handling. Currently at RentOK, Bengaluru.",
  keywords: [
    "Harsh Kumar Tulsyan",
    "Customer Success Manager",
    "SaaS Operations",
    "Product Operations",
    "Finance",
    "Accounts Manager",
    "RentOK",
    "Bengaluru",
    "MIS Reporting",
    "TDS GST",
  ],
  authors: [{ name: "Harsh Kumar Tulsyan", url: "https://linkedin.com/in/harsh-tulsyan-3ab03023b/" }],
  creator: "Harsh Kumar Tulsyan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Harsh Kumar Tulsyan | Customer Success Manager | SaaS + Finance + Product Ops",
    description:
      "7+ years bridging customer success, SaaS product operations, and finance. Currently driving adoption & product clarity at RentOK, Bengaluru.",
    siteName: "Harsh Kumar Tulsyan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Kumar Tulsyan | CSM | SaaS Operations",
    description: "Customer Success Manager with SaaS + Finance + Product Operations experience.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0a0a0f] text-slate-200 antialiased noise">
        {children}
      </body>
    </html>
  );
}
