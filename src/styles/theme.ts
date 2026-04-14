import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bg: "#ffffff",
  bgSecondary: "#e7e7e7",
  bgHover: "#f7f7f7",
  text: "#000000",
  navShadow: "grey",
  cardShadow: "rgba(0, 0, 0, 0.1)",
  border: "black",
};

export const darkTheme = {
  bg: "#1a1a2e",
  bgSecondary: "#16213e",
  bgHover: "#0f3460",
  text: "#e0e0e0",
  navShadow: "#000000",
  cardShadow: "rgba(255, 255, 255, 0.05)",
  border: "#e0e0e0",
};

export type AppTheme = typeof lightTheme;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background-color 300ms, color 300ms;
  }
`;
