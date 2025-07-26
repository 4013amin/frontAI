"use client"

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { useSelector } from "react-redux"
import { Stars } from "lucide-react"
import CreateTitleFormHeader from "./CreateTitleFormHeader"
import ArticleTitleInput from "./inputs/ArticleTitleInput"
import WordPressSiteSelect from "./inputs/WordPressSiteSelect"
import ArticleLanguageSelect from "./inputs/ArticleLanguageSelect"
import CustomLanguageInput from "./inputs/CustomLanguageInput"
import GenerateImageToggle from "./inputs/GenerateImageToggle"
import useCreateArticle from "./hooks/useCreateArticle"
import { CreateArticleFormSchema } from "@/lib/schemas"
import { RootState } from "@/store/store"
import SubmitFormButton from "@/components/ui/SubmitFormButton"

const CreateTitleForm = () => {
  const createdTitle = useSelector((state: RootState) => state.userInfo.selectedArticleTitle)

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
      article_language: "",
      custom_language: "",
      generate_image_option: false
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
    if (isSuccess) {
      // Reset the form or perform any other actions on success
      console.log(data)
      return
    }
    if (isPending) {
      console.log("در حال ایجاد مقاله...")
    }
  }, [isSuccess, isPending])
  

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

        <GenerateImageToggle control={control} />

        <SubmitFormButton isPending={false} text="خلق کن و بفرست" icon={<Stars />} />
      </form>
    </div>
  )
}

export default CreateTitleForm