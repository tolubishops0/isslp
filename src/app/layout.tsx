import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intelligent Scholar",
  description: "AI powered education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} bg-[#090E2F]`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
