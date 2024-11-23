import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Questify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Providers>
          <Navbar />
          {children}

        </Providers>
      </body>
    </html>
  );
}
