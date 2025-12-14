"use client"
import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { IArticle } from "@/types/globa_types"
import TextEditor from "@/components/ui/TextEditor"
import "@/styles/article.css"
import ImageUploader from "@/components/ui/ImageUploader"
import useUpdateArticle from "./hooks/useUpdateArticle"
import { Button } from "@/components/shadcn/Button"
import { Save, Loader } from "lucide-react"

type IProps = IArticle

const EditeArticleSection = (props: IProps) => {
  const {
    title,
    content,
    image_url,
    id,
    status
  } = props

  const [isSaved, setIsSaved] = useState(true)
  const { updateArticle, isPending } = useUpdateArticle()

  // determine which image URL to show as preview
  const previewUrl = 
    image_url || 
    (props as any).featured_image_url || 
    (props as any).manual_image_url || 
    (props as any).temp_image || 
    undefined

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

  // Reset form when article data changes
  useEffect(() => {
    setValue("title", title)
    setValue("content", content)
    setValue("image", null)
    setIsSaved(true)
  }, [id, title, content, setValue])

  const onSubmit = async (data: { title: string; content: string; image: File | null }) => {
    const payload = {
      title: data.title,
      content: data.content,
      image: data.image
    }

    updateArticle(
      { id, payload },
      {
        onSuccess: () => {
          setIsSaved(true)
        }
      }
    )
  }

  // هنگام تغییر فرم
  useEffect(() => {
    if (isDirty) {
      setIsSaved(false)
    }
  }, [isDirty])

  const isPublished = status === "published"

  return (
    <article
      className="article w-full lg:!w-8/12 flex flex-col
     items-start justify-start p-3 border rounded-xl space-y-4"
    >
      {/* Status indicator */}
      {isPublished && (
        <div className="w-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>یادآوری:</strong> این مقاله قبلاً منتشر شده است. تغییرات شما مقاله را به‌روزرسانی می‌کند.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        {/* تصویر مقاله */}
        <div>
          <label className="text-sm font-medium mb-2 block">تصویر شاخص (اختیاری)</label>
          <ImageUploader
            fieldLabel="تصویر مقاله خود را در اینجا بارگذاری کنید"
            setValue={(file) => {
              setValue("image", file, { shouldDirty: true })
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
            {...register("title", {
              onChange: () => {
                setIsSaved(false)
              }
            })}
            className="w-full p-2 border rounded-md text-lg font-bold dark:bg-zinc-800 dark:border-zinc-700"
            disabled={isPending}
          />
        </div>

        {/* ادیتور محتوا */}
        <div>
          <label className="text-sm font-medium mb-2 block">محتوای مقاله</label>
          <TextEditor name="content" control={control} />
        </div>

        {/* دکمه ذخیره */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button
            type="submit"
            disabled={isPending || !isDirty}
            className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader className="animate-spin ml-2" size={18} />
                در حال ذخیره...
              </>
            ) : (
              <>
                <Save className="ml-2" size={18} />
                {isSaved ? "ذخیره تغییرات" : "ذخیره تغییرات"}
              </>
            )}
          </Button>
        </div>
      </form>
    </article>
  )
}

export default EditeArticleSection
