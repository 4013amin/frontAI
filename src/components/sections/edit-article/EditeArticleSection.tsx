"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { IArticle } from "@/types/globa_types"
import TextEditor from "@/components/ui/TextEditor"
import "@/styles/article.css"
import SubmitFormButton from "@/components/ui/SubmitFormButton"
import ImageUploader from "@/components/ui/ImageUploader"
import { toast } from "sonner"
import API from "@/lib/axios"

type IProps = IArticle

const EditeArticleSection = (props: IProps) => {
  const {
    title,
    content,
    image_url,
    id,
    status
  } = props

  const [isUpdating, setIsUpdating] = useState(false)
  const [isSaved, setIsSaved] = useState(true)

  // determine which image URL to show as preview
  const previewUrl = 
    image_url || 
    (props as any).featured_image_url || 
    (props as any).manual_image_url || 
    (props as any).temp_image || 
    undefined

  console.log("EditeArticleSection - previewUrl:", previewUrl)

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isDirty }
  } = useForm({
    defaultValues: {
      title: title,
      content: content,
      image: null as File | null
    }
  })

  const onSubmit = async (data: { title: string; content: string; image: File | null }) => {
    setIsUpdating(true)
    try {
      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("content", data.content)
      if (data.image) {
        formData.append("image", data.image)
      }
      formData.append("status", "published")

      console.log("Attempting to update article...")
      
      const response = await API.put(`/update_article/${id}/`, formData)

      if (response.status === 200 || response.status === 201) {
        toast.success("مقاله با موفقیت بروزرسانی شد")
        setIsSaved(true)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    } catch (error: any) {
      console.error("Error updating article:", error)
      const errorMsg = error.response?.data?.error || error.message || "خطا در بروزرسانی مقاله"
      toast.error(errorMsg)
    } finally {
      setIsUpdating(false)
    }
  }

  // هنگام تغییر فرم
  React.useEffect(() => {
    if (isDirty) {
      setIsSaved(false)
    }
  }, [isDirty])

  return (
    <article
      className="article w-full lg:!w-8/12 flex flex-col
     items-start justify-start p-3 border rounded-xl space-y-4"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        {/* تصویر مقاله */}
        <div>
          <label className="text-sm font-medium mb-2 block">تصویر شاخص (اختیاری)</label>
          <ImageUploader
            fieldLabel="تصویر مقاله خود را در اینجا بارگذاری کنید"
            setValue={(file) => {
              setValue("image", file)
              setIsSaved(false)
            }}
            watch={watch("image")}
            defaultPreview={previewUrl}
          />
        </div>

        {/* عنوان مقاله */}
        <div>
          <label className="text-sm font-medium mb-2 block">عنوان مقاله</label>
          <input
            type="text"
            {...register("title")}
            className="w-full p-2 border rounded-md text-lg font-bold"
            onChange={() => setIsSaved(false)}
          />
        </div>

        {/* ادیتور محتوا */}
        <div>
          <label className="text-sm font-medium mb-2 block">محتوای مقاله</label>
          <TextEditor name="content" control={control} />
        </div>

       
      </form>
    </article>
  )
}

export default EditeArticleSection
