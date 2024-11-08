import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Mo's Soundboard",
  description: "Soundboard App for playing goofy sounds (Dev by Mohammed Akinbayo)",
  authors: {name: 'Mohammed Akinbayo', url: 'https://mohammed532.github.io/'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={`${funnelDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
