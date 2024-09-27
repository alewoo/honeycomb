import { ThemeProvider } from '../context/ThemeContext';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://startup.exchange",
  title: {
    default: "Startup Exchange | The path to moving your ideas forward awaits.",
    template: "%s | Startup Exchange",
  },
  description: "Startup Exchange is a student-led organization curating the largest community for college builders, makers, and creators. We enable you to build, launch, and grow your ideas.",
  keywords: ["startup", "startup exchange", "college startups", "college entrepreneurship", "startup accelerators"],
  twitter: {
    card: "summary_large_image",
    site: "@startupxchange",
    creator: "@startupxchange",
    images: "https://startup.exchange/head/embed.png",
    title: {
      default: "Startup Exchange | The path to moving your ideas forward awaits.",
      template: "%s | Startup Exchange",
    },
    description:
      "Startup Exchange is a student-led organization curating the largest community for college builders, makers, and creators. We enable you to build, launch, and grow your ideas.",
  },
  openGraph: {
    url: "https://startup.exchange/",
    type: "website",
    locale: "en_US",
    siteName: "Startup Exchange",
    title: {
      default: "Startup Exchange | The path to moving your ideas forward awaits.",
      template: "%s | Startup Exchange",
    },
    description:
    "Startup Exchange is a student-led organization curating the largest community for college builders, makers, and creators. We enable you to build, launch, and grow your ideas.",
    images: [
      {
        url: "https://startup.exchange/head/embed.png",
        alt: "Startup Exchange: The path to moving your ideas forward awaits.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black text-white`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
