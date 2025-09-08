"use client"

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { useRouter } from "nextjs-toploader/app"
import { Stars } from "lucide-react"
import CreateTitleFormHeader from "./CreateTitleFormHeader"
import ArticleTitleInput from "./inputs/ArticleTitleInput"
import WordPressSiteSelect from "./inputs/WordPressSiteSelect"
import ArticleLanguageSelect from "./inputs/ArticleLanguageSelect"
import CustomLanguageInput from "./inputs/CustomLanguageInput"
import useCreateArticle from "./hooks/useCreateArticle"
import ArticleToneSelect from "./inputs/ArticleToneSelect"
import TargetAudienceInput from "./inputs/TargetAudienceInput"
import ArticlePurposeSelect from "./inputs/ArticlePurposeSelect"
import ArticleAdditionalKeywords from "./inputs/ArticleAdditionalKeywords"
import CustomInstructions from "./inputs/CustomInstructions"
import ArticleSubheadings from "./inputs/ArticleSubheadings"
import { CreateArticleFormSchema } from "@/lib/schemas"
import { RootState } from "@/store/store"
import { setCreatedArticle } from "@/store/features/articleSlice"
import SubmitFormButton from "@/components/ui/SubmitFormButton"
import ImageUploader from "@/components/ui/ImageUploader"

const CreateTitleForm = () => {
  const createdTitle = useSelector((state: RootState) => state.article.selectedArticleTitle)
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    createArticle,
    isPending,
    isSuccess,
    data
  } = useCreateArticle()

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm<z.infer<typeof CreateArticleFormSchema>>({
    resolver: zodResolver(CreateArticleFormSchema),
    defaultValues: {
      title: "",
      wordpress_site_id: "",
      article_language: "fa",
      custom_language: "",
      generate_image_option: false,
      tone: "formal",
      target_audience: "",
      article_purpose: "informative",
      additional_keywords: "",
      custom_instructions: "",
      subheadings: [],
      image_field: undefined
    }
  })

  const selectedLanguage = watch("article_language")

  const onSubmit = (data: z.infer<typeof CreateArticleFormSchema>) => {
    createArticle(data)
  }

  // If the user already selected a title, set it as the form's default
  useEffect(() => {
    if (createdTitle) {
      setValue("title", createdTitle)
    }
  }, [createdTitle, setValue])

  // If the selected language is not "custom", clear the custom language field
  useEffect(() => {
    if (selectedLanguage !== "custom") {
      setValue("custom_language", "")
    }
  }, [selectedLanguage, setValue])


  useEffect(() => {
    if (isSuccess && data) {
      toast.success("مقاله با موفقیت ایجاد شد")
      dispatch(setCreatedArticle(data))
      router.push(`/panel/articles/review/${data.id}`)
    }
  }, [isSuccess, data])
  

  return (
    <div className="w-full flex-center flex-col gap-3">
      <CreateTitleFormHeader />

      <form
        className="w-full lg:w-3/4 max-w-xl gap-5 flex flex-col mt-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ArticleTitleInput register={register} error={errors.title?.message} />

        <WordPressSiteSelect
          control={control}
          error={errors.wordpress_site_id?.message}
        />

        <ArticleLanguageSelect
          control={control}
          error={errors.article_language?.message}
        />

        {
          selectedLanguage === "custom" && (
            <CustomLanguageInput
              register={register}
              error={errors.custom_language?.message}
            />
          )
        }

        <ArticleToneSelect
          control={control}
          error={errors.tone?.message}
        />
        
        <TargetAudienceInput register={register} error={errors.target_audience?.message} />

        <ArticlePurposeSelect control={control} error={errors.article_purpose?.message} />

        <ArticleAdditionalKeywords register={register} error={errors.additional_keywords?.message} />

        <CustomInstructions control={control} />

        <ArticleSubheadings control={control} />

        {/* Upload attachment */}
        <div>
          <label
            className="text-sm font-medium mb-3 block"
          >
            تصویر شاخص
            <span className="text-xs text-blue-500 dark:text-blue-300"> (اختیاری) </span>

          </label>

          <ImageUploader
            field={register("image_field")}
            error={
              typeof errors.image_field?.message === "string" ?
                errors.image_field.message
                : undefined
            }
          />

        </div>

        {/* <GenerateImageToggle control={control} /> */}

        <SubmitFormButton isPending={isPending} text="خلق کن و بفرست" icon={<Stars />} />
      </form>
    </div>
  )
}

export default CreateTitleForm