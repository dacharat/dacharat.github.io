import { createGlobalStyle } from "styled-components";

/**
 * Minimal mono palette + dual brand accents (LINE MAN green + Wongnai orange).
 *
 * Design notes
 * - bg / surface keep neutral warm/cool tones, no pure #000 / #fff
 * - accent (green) is the primary call-to-action color
 * - accentAlt (orange) is used for highlights, hover trails, and gradients
 *   alongside the green
 */
export const lightTheme = {
  bg: "#fafaf9",
  surface: "#ffffff",
  surfaceAlt: "#f4f4f3",
  text: "#0a0a0a",
  textMuted: "#6b6b6b",
  textSubtle: "#9a9a9a",
  border: "#e5e5e3",
  borderStrong: "#cfcfcc",
  accent: "#06c755", // LINE MAN green
  accentHover: "#05a847",
  accentAlt: "#ff6b35", // Wongnai orange
  accentAltHover: "#e85a26",
  shadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)",
  shadowHover: "0 2px 4px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.08)",
};

export const darkTheme = {
  bg: "#0a0a0a",
  surface: "#141414",
  surfaceAlt: "#1c1c1c",
  text: "#f5f5f5",
  textMuted: "#a3a3a3",
  textSubtle: "#6b6b6b",
  border: "#262626",
  borderStrong: "#383838",
  accent: "#1ed760", // slightly brighter for dark bg
  accentHover: "#33e673",
  accentAlt: "#ff7f50",
  accentAltHover: "#ff9670",
  shadow: "0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.4)",
  shadowHover: "0 2px 4px rgba(0, 0, 0, 0.5), 0 12px 32px rgba(0, 0, 0, 0.55)",
};

export type AppTheme = typeof lightTheme;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  :root {
    --font-sans-stack: var(--font-sans), -apple-system, BlinkMacSystemFont,
      "Segoe UI", Helvetica, Arial, sans-serif;
    --font-mono-stack: var(--font-mono), ui-monospace, SFMono-Regular, Menlo,
      Monaco, Consolas, monospace;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: var(--font-sans-stack);
    font-size: 16px;
    line-height: 1.6;
    transition: background-color 300ms ease, color 300ms ease;
    font-feature-settings: "cv11", "ss01";
  }

  code, kbd, pre, samp {
    font-family: var(--font-mono-stack);
  }

  ::selection {
    background-color: ${({ theme }) => theme.accent};
    color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  p {
    margin: 0;
    line-height: 1.65;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.border};
    margin: 0;
  }
`;
