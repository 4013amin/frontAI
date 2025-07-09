"use client";

import { ThemeProvider } from "./ThemeProvider";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
