import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saturnity",
  description: "To the moon and to saturn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-saturn-space text-white min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}

