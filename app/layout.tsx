import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhranil-roy-portfolio.vercel.app"),

  title: {
    default: "Abhranil Roy | Full Stack Developer & AI/ML Enthusiast",
    template: "%s | Abhranil Roy",
  },

  description:
    "Abhranil Roy is a Computer Science Engineering student, Full Stack Developer, and AI/ML enthusiast passionate about building modern web applications and intelligent systems.",

  keywords: [
    "Abhranil Roy",
    "Developer Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Computer Science Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Developer",
    "Software Developer",
  ],

  authors: [{ name: "Abhranil Roy" }],
  creator: "Abhranil Roy",
  publisher: "Abhranil Roy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Abhranil Roy | Full Stack Developer & AI/ML Enthusiast",
    description:
      "Explore the portfolio, projects, skills, and developer journey of Abhranil Roy.",
    siteName: "Abhranil Roy Portfolio",
    url: "https://abhranil-roy-portfolio.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1672,
        height: 941,
        alt: "Abhranil Roy — Full Stack Developer and AI/ML Enthusiast",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhranil Roy | Developer Portfolio",
    description:
      "Full Stack Developer, Computer Science Engineering student, and AI/ML enthusiast building meaningful digital experiences.",
    images: ["/og-image.png"],
  },

  category: "technology",
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