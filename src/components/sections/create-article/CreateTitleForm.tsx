"use client"

import React from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Stars } from "lucide-react"
import CustomInput from "@/components/ui/CustomInput"
import { CreateArticleFormSchema } from "@/lib/schemas"
import SubmitFormButton from "@/components/ui/SubmitFormButton"


const CreateTitleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof CreateArticleFormSchema>>({
    resolver: zodResolver(CreateArticleFormSchema),
    defaultValues: {
      title: "", wordpress_site_id: 0, article_language: "", custom_language: "" 
    }
  })

  return (
    <div className="w-full flex-center flex-col gap-3">
      <Image 
        src="/images/chara-robo/Robot Writing.webp"
        alt="Robot Writing"
        width={500}
        height={500}
        className="w-36"
      />

      <h1 className="font-bold text-2xl ">ایده شما قلم هوشمند ما</h1>

      <p className="text-center !text-sm md:!text-base">
        یک عنوان به من بدهید تا یک مقاله بی‌نظیر برای شما خلق کنم.
      </p>

      <form 
        className="w-full lg:w-3/4 max-w-xl gap-4 flex flex-col"
        onSubmit={handleSubmit(data => console.log(data))}
      >

        <CustomInput 
          register={register}
          name="title"
          error={errors.title?.message}
          placeholder="عنوان مقاله"
        />

        

        <SubmitFormButton 
          isPending={false} 
          text="خلق کن و بفرست" 
          icon={<Stars />}
        />

      </form>
    </div>
  )
}

export default CreateTitleForm