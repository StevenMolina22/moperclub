import Footer from "@/components/layout/footer";
import { Providers } from "@/utils/providers";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moperclub",
  description: "A project for all the people interested in having a good time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Providers>{children}</Providers>
          <Footer className="mt-8" />
        </ClerkProvider>
      </body>
    </html>
  );
}
