import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

const vietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-vietnam-pro",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmatPay - Redefining Payment Excellence",
  description: "Empowering Businesses with Next-Gen Payment Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/smatpay_p_logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${vietnamPro.variable} antialiased text-black font-sans bg-white`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}