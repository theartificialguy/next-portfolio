import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NavBar, Footer } from "@/components";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Kelkar | Portfolio",
  description: "Yash Kelkar's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <main className="w-full min-h-screen">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
