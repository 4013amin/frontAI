"use client"
import "@/styles/globals.css"
import "@/styles/utilities.css"
import NextTopLoader from "nextjs-toploader"
import ThemeWrapper from "@/providers/ThemeWrapper"
import { Toaster } from "@/components/shadcn/Toaster"
import StoreProvider from "@/providers/StoreProvider"
import ReactQueryProvider from "@/providers/ReactQueryProvider"
import { LoadingProvider } from "@/hooks/useGlobalLoading"

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="font-sans" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <ThemeWrapper>
            <NextTopLoader
              showSpinner={false}
              zIndex={1600}
            />

            <Toaster position="top-right" richColors />

            <ReactQueryProvider>
              <LoadingProvider>
                {children}
              </LoadingProvider>
            </ReactQueryProvider>
          </ThemeWrapper>
        </StoreProvider>
      </body>
    </html>
  )
}