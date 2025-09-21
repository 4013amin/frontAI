"use client"
import React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { IArticle } from "@/types/globa_types"
import TextEditor from "@/components/ui/TextEditor"
import "@/styles/article.css"

type IProps = IArticle

const EditeArticleSection = (props: IProps) => {
  const {
    title,
    content,
    image_url
  } = props

  // فرم
  const {
    register,
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      title: title,
      content: content
    }
  })

  const onSubmit = (data: { title: string, content: string }) => {
    // eslint-disable-next-line no-console
    console.log("فرم ارسال شد:", data)
    // اینجا میتونی درخواست API برای آپدیت مقاله بزنی
  }

  return (
    <article
      className="article w-full lg:!w-8/12 flex flex-col
     items-start justify-start p-3 border rounded-xl space-y-4"
    >
      {
        image_url && (
          <Image
            src={image_url}
            height={600}
            alt={title}
            width={1200}
            className="rounded-lg"
          />
        )
      }

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        {/* عنوان مقاله */}
        <input
          type="text"
          {...register("title")}
          className="w-full p-2 border rounded-md text-lg font-bold"
        />

        {/* ادیتور محتوا */}
        <TextEditor name="content" control={control} />

        {/* دکمه ذخیره */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          ذخیره تغییرات
        </button>
      </form>
    </article>
  )
}

export default EditeArticleSection