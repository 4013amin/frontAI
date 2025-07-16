"use client"

import { Loader2Icon } from "lucide-react"
import React, { useEffect } from "react"
import Cookies from "js-cookie"

const Page = () => {
  useEffect(() => {
    Cookies.remove("auth_token")

    localStorage.clear()

    window.location.href = "/auth/login"
  }, [])

  return (
    <div className="w-full items-center flex-center flex-col gap-4 mt-14 text-red-500">
      <Loader2Icon className="animate-spin" />

      <h1>درحال خارج شدن ...</h1>
    </div>
  )
}

export default Page