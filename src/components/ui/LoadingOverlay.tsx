"use client"

import Image from "next/image"
import React from "react"

type Props = {
  message?: string
}

const LoadingOverlay: React.FC<Props> = ({ message = "در حال پردازش..." }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-white dark:bg-zinc-900 rounded-2xl px-6 py-10 shadow-lg flex flex-col
       items-center gap-4 w-[90%] max-w-sm text-center"
      >
        <Image
          src="/heart-pulse-2.svg"
          alt="Loading..."
          width={80}
          height={80}
        />

        <p className="text-gray-800 dark:text-gray-100 font-light text-sm mt-2">{message}</p>
      </div>
    </div>
  )
}

export default LoadingOverlay