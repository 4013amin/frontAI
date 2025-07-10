import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex-center gap-2'>
        <Image
            src={"/binam-logo.svg"}
            className="w-8 lg:w-10"
            width={40}
            height={32}
            alt="هوش مصنوعی تولید محتوا"
          />

          <span className="font-semibold text-xl lg:text-2xl">بینام</span>
    </div>
  )
}

export default Logo