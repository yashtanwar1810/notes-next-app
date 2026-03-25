import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../lib/components";

export const metadata: Metadata = {
  title: "Take Notes",
  description: "collabarative notes taking app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
