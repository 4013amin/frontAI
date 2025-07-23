import Image from "next/image"
import React from "react"

const CreateTitleFormHeader = () => {
  return (
    <>
      <Image
        src="/images/chara-robo/Robot Writing.webp"
        alt="Robot Writing"
        width={500}
        height={500}
        className="w-36"
      />

      <h1 className="font-bold text-2xl">ایده شما قلم هوشمند ما</h1>

      <p className="text-center !text-sm md:!text-base">
        یک عنوان به من بدهید تا یک مقاله بی‌نظیر برای شما خلق کنم.
      </p>

    </>
  )
}

export default CreateTitleFormHeader