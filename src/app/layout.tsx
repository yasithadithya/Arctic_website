import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arctic Technologies | IT Solutions & SLA-Backed Support",
  description: "Arctic Technologies delivers dependable IT solutions including computer repairs, mobile phone services, Power App solutions, website design, and identity management with SLA-backed support in Sri Lanka.",
  keywords: ["IT solutions", "computer repair", "mobile repair", "Power Apps", "website design", "identity management", "Sri Lanka", "SLA support"],
  authors: [{ name: "Arctic Technologies" }],
  openGraph: {
    title: "Arctic Technologies | IT Solutions & SLA-Backed Support",
    description: "Professional IT services with SLA-backed support. Computer repairs, mobile services, Power Apps, and more.",
    url: "https://arctictechnologies.org.lk",
    siteName: "Arctic Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-arctic-navy min-h-screen`}>
        <div className="relative min-h-screen bg-grid bg-radial">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
