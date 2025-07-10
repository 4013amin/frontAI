import type { Metadata } from "next";
import "./globals.css";
import "@/styles/utilities.css";
import ThemeWrapper from "@/providers/ThemeWrapper";
import { Toaster } from "@/components/shadcn/Toaster";
import Header from "@/components/shared/header/Header";
import StoreProvider from "@/providers/StoreProvider";


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
            <Header />
            {children}
          </ThemeWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
