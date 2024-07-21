import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header.layout";
import { Footer } from "@/components/layout/footer.layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lablynx",
  description: "developed by @anjana784",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="h-[calc(100vh_-_112px)] py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
