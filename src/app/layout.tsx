import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header, { Navigation } from "@/components/Header";
import Footer from "@/components/Footer";
import PageAnimatePresence from "@/components/PageAnimatePresence";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sabka Sath Society | Official Website",
  description: "Official website of Sabka Sath Society. A registered NGO committed to social welfare, education, healthcare, and sustainable community development across India.",
  keywords: "NGO, Sabka Sath Society, social welfare, education, healthcare, India, community development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-gray-900`}>
        <Header />
        <Navigation />
        <main className="min-h-screen">
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
