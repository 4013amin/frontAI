import Image from "next/image"
import React, { memo } from "react"

const Logo = () => {
  return (
    <div className="flex-center gap-2">
      <Image
        src="/binam-logo.svg"
        className="w-10 lg:w-12"
        width={40}
        height={32}
        alt="هوش مصنوعی تولید محتوا"
      />

      <span className="font-semibold text-2xl lg:text-3xl">بینام</span>
    </div>
  )
}

export default memo(Logo)