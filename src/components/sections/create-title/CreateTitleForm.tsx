"use client"

import React, { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import TagInput, { TagInputHandle } from "./TagInput"
import useGenerateTitles from "./hooks/useGenerateTitles"
import SubmitFormButton from "@/components/ui/SubmitFormButton"
import { CreateTitleFormSchema } from "@/lib/schemas"

type CreateTitleFormSchemaType = z.infer<typeof CreateTitleFormSchema>

type IProps = {
  setTitles: React.Dispatch<React.SetStateAction<string[] | string>>
  setTags: React.Dispatch<React.SetStateAction<string>>
}


const CreateTitleForm = ({ setTitle, setTags }: IProps) => {
  const {
    generateTitles,
    data,
    error,
    isSuccess,
    isPending
  } = useGenerateTitles()

  const { control, handleSubmit } = useForm<CreateTitleFormSchemaType>({
    resolver: zodResolver(CreateTitleFormSchema),
    defaultValues: { tags: "" }
  })

  const tagInputRef = useRef<TagInputHandle>(null)

  const onSubmit = (data: { tags: string }) => {
    generateTitles(data.tags)
  }

  const handleFinalSubmit = () => {
    tagInputRef.current?.flushInputToTags()
    setTimeout(() => handleSubmit(onSubmit)(), 0)
  }


  useEffect(() => {
    if(isSuccess && data) {
      console.log(data)
    }
  }, [isSuccess, data])


  return (
    <>
      <h1 className="font-bold text-xl text-center mt-4">ابزار ایده پردازی</h1>

      <p className="text-sm text-center mt-4 text-zinc-600 dark:text-zinc-300">
        چند کلمه کلیدی اصلی مرتبط با موضوع مورد نظر خود را وارد کنید
        تا هوش مصنوعی چندین عنوان جذاب برای شما پیشنهاد دهد.
      </p>

      <form
        className="mt-3 flex flex-col gap-3"
        onSubmit={
          e => {
            e.preventDefault()
            handleFinalSubmit()
          }
        }
      >
        <TagInput name="tags" control={control} ref={tagInputRef} />

        <SubmitFormButton isPending={isPending} text="ثبت و ادامه" />
      </form>
    </>
  )
}

export default CreateTitleForm