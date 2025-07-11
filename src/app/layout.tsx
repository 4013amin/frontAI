"use client";
import "@/styles/globals.css";
import "@/styles/utilities.css";
import ThemeWrapper from "@/providers/ThemeWrapper";
import { Toaster } from "@/components/shadcn/Toaster";
import StoreProvider from "@/providers/StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa-IR" dir="rtl" className="font-sans" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <ThemeWrapper>
            <Toaster />
              {children}
          </ThemeWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
