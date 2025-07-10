import type { Metadata } from "next";
import "./globals.css";
import "@/styles/utilities.css";
import ThemeWrapper from "@/providers/ThemeWrapper";
import { Toaster } from "@/components/shadcn/Toaster";
import Header from "@/components/shared/header/Header";
import StoreProvider from "@/providers/StoreProvider";
import MainContentProvider from "@/providers/MainContentProvider";
import BackgroundOverlay from "@/components/ui/BackgroundOverlay";

export const metadata: Metadata = {
  title: "Mr.coder AI",
  description: "تولید محتوای هوشمند",
};

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
            <BackgroundOverlay />
            <Header />
            <MainContentProvider>
              {children}
            </MainContentProvider>
          </ThemeWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
