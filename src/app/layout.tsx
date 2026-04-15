import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import ThemeProviderWrapper from "./ThemeProviderWrapper";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://dacharat.github.io";
const SITE_TITLE = "Dacharat Pankong — Senior Backend Engineer";
const SITE_DESCRIPTION =
  "Senior backend engineer at LINE MAN Wongnai. I build food delivery systems at scale — pricing, ordering, and the paths millions of orders run through every day.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Dacharat Pankong" }],
  creator: "Dacharat Pankong",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Dacharat Pankong",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 600,
        height: 600,
        alt: "Dacharat Pankong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/profile.jpg"],
  },
  icons: {
    icon: "/assets/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
