"use client"
import { Loader2Icon } from "lucide-react"
import React, { useEffect } from "react"
import useLogout from "@/hooks/useLogout"

const Page = () => {
  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useLogout()

  useEffect(() => {
    mutate()
  }, [])

  return (
    <>
      {
        isPending && (
          <div
            className="w-full items-center flex-center flex-col gap-4 mt-14
            text-red-500"
          >
            <Loader2Icon className="animate-spin" />

            <h1>درحال خارج شدن ...</h1>
          </div>
        )
      }

      {
        isError && (
          <div
            className="w-full items-center flex-center flex-col gap-4 mt-14
            text-red-500"
          >
            <h1>خروج انجام نشد!</h1>
          </div>
        )
      }

      {
        isSuccess && (
          <div
            className="w-full items-center flex-center flex-col gap-4 mt-14
            text-green-500"
          >
            <h1>با موفقیت خارج شدید!</h1>
          </div>
        )
      }
    
    </>
  )
}

export default Page