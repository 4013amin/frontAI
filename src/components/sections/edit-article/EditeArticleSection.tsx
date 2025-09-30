"use client"
import React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { IArticle } from "@/types/globa_types"
import TextEditor from "@/components/ui/TextEditor"
import "@/styles/article.css"
import useUpdateArticle from "./hooks/useUpdateArticle"
import SubmitFormButton from "@/components/ui/SubmitFormButton"

type IProps = IArticle

const EditeArticleSection = (props: IProps) => {
  const {
    title,
    content,
    image_url,
    id
  } = props

  const { updateArticle, isPending } = useUpdateArticle()

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
    updateArticle({
      id: id,
      payload: data
    })
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
        <SubmitFormButton text="بروزرسانی" isPending={isPending} />
      </form>
    </article>
  )
}

export default EditeArticleSection