"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContextProvider, useTheme } from "@/context/ThemeContext";
import { GlobalStyle } from "@/styles/theme";

function InnerWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <InnerWrapper>{children}</InnerWrapper>
    </ThemeContextProvider>
  );
}
