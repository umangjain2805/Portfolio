import type { Metadata, Viewport } from "next";
import {
  Unbounded,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { content as c } from "@/data/content";
import "./globals.css";
import "./contact.css";
import "./hero.css";
const display = Unbounded({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-label",
  display: "swap",
});
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title: c.metadata.title,
  description: c.description,
  metadataBase: new URL(origin || "http://localhost:3000"),
  ...(origin ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: c.metadata.title,
    description: c.description,
    type: "website",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: c.metadata.title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: c.metadata.title,
    description: c.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.name,
    jobTitle: c.title,
    email: `mailto:${c.email}`,
    sameAs: c.socials.map((s) => s.url),
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: c.proof.education.name,
    },
    ...(origin ? { url: origin } : {}),
  };
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          {c.ui.skip}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
