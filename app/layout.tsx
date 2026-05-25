import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Answer Rank Labs — Make Your Brand the Definitive Answer in AI Search",
  description:
    "Answer Rank Labs engineers your brand into the citation layer of ChatGPT, Gemini, and Perplexity. Generative Engine Optimization for enterprise brands in the United States and India.",
  metadataBase: new URL("https://answerranklabs.com"),
  openGraph: {
    title: "Answer Rank Labs — Make Your Brand the Definitive Answer in AI Search",
    description:
      "When enterprise buyers ask AI for recommendations, your brand becomes the answer they receive. Book your AI Search Blueprint on WhatsApp.",
    url: "https://answerranklabs.com",
    siteName: "Answer Rank Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Answer Rank Labs — AI Search Citation Authority",
    description: "We place your brand inside the citation layer of ChatGPT, Gemini, and Perplexity.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-[#08090c] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
