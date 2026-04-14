import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import ThemeProviderWrapper from "./ThemeProviderWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dacharat Pankong",
  description: "Personal portfolio of Dacharat Pankong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
