import Header from "@/components/shared/Header"
import MainContentProvider from "@/providers/MainContentProvider"

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />

      <MainContentProvider>{children}</MainContentProvider>
    </>
  )
}