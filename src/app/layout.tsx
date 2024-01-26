import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Telanoff",
  description: "A web portfolio for me, Jason Telanoff",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon_light.png',
        href: '/icon_light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon_dark.png',
        href: '/icon_dark.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
