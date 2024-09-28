import { ThemeProvider } from "../context/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "honeycomb.", // Set the title here
  description: "Your personalized roadmap to internships.",
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
