import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const amethysta = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "timetrakd — Streamline HR & Modren teams operations",
  description:
    "TimeTrakd is an intuitive HR platform that simplifies attendance tracking, leave management, and workflow automation. Boost productivity, streamline HR operations, and empower your organization with real-time insights and a seamless user experience.",
  keywords: [
    "HR software",
    "attendance tracking",
    "leave management",
    "time tracking platform",
    "employee management",
    "HR automation",
    "workforce management",
    "HR analytics",
    "SaaS time tracking",
    "TimeTrakd",
  ],
  authors: [{ name: "TimeTrakd" }],
  creator: "TimeTrakd",
  publisher: "TimeTrakd",
  metadataBase: new URL("https://www.timetrakd.com"),
  alternates: {
    canonical: "https://www.timetrakd.com",
  },
  openGraph: {
    title: "TimeTrakd — Smart HR & Team Management",
    description:
      "Streamline HR processes with TimeTrakd. Track attendance, manage leave requests, automate workflows, and access real-time reports — all in one modern platform.",
    url: "https://www.timetrakd.com",
    siteName: "TimeTrakd",
    images: [
      {
        url: "/logo-nobg.png", // replace with actual OG image later
        width: 1200,
        height: 630,
        alt: "TimeTrakd HR Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeTrakd — Smart HR & Time Management",
    description:
      "A modern HR platform for attendance tracking, leave management, automation, and real-time analytics.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${amethysta}`} lang="en">
      <body className={amethysta.className}>
        <ThemeProvider defaultTheme="system" storageKey="nextjs-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
