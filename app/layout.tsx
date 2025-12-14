import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afid's Portfolio",
  description: "Portfolio of Afid, a full stack developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
