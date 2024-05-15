import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navbar";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"] });
const inter = Inter ({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Sline",
  description: "Styline Guidelines for FGI Brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("m-5", nunito.className)}><NavigationBar />{children}</body>
    </html>
  );
}
