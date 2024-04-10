import type { Metadata } from "next";
import { Nunito_Sans as Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: '--font-nunitoSans' });

export const metadata: Metadata = {
  title: "Light Weight",
  description: "Become stronger!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} bg-blue-900 font-sans`}>
        {children}
      </body>
    </html>
  );
}
