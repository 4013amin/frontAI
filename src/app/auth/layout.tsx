import FormLogo from "@/components/sections/auth-forms/FormLogo"

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="relative z-0 min-h-screen flex-center p-3">
        <div className="absolute inset-0 z-[-1] bg-pattern" />

        <div className="flex-center flex-col gap-4 w-full">
          <FormLogo />

          <div
            className="bg-white border rounded-2xl py-5 px-3 w-full
              md:!w-1/2 lg:!w-1/3 dark:bg-zinc-900
              "
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}