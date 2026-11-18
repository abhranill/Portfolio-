import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhranil Roy | Developer Portfolio",
  description:
    "Personal portfolio of Abhranil Roy — Full Stack Developer and AI/ML Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}