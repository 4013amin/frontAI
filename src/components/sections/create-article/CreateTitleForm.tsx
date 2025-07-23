"use client"

import React, { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import z from "zod"
import { Earth, Languages, PenIcon, Stars } from "lucide-react"
import CreateTitleFormHeader from "./CreateTitleFormHeader"
import CustomInput from "@/components/ui/CustomInput"
import CustomSelect from "@/components/ui/CustomSelect"
import { CreateArticleFormSchema } from "@/lib/schemas"
import SubmitFormButton from "@/components/ui/SubmitFormButton"
import useGetSites from "@/hooks/useGetSites"  

const CreateTitleForm = () => {
  const {
    register,
    handleSubmit,
    control,
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

  const { sites, isLoading: sitesLoading } = useGetSites()

  const siteOptions = sites?.map(s => ({
    value: String(s.id),
    label: s.name
  })) || []


  useEffect(() => {
    console.log("Sites updated:", sites)
  }, [sites])


  return (
    <div className="w-full flex-center flex-col gap-3">
      <CreateTitleFormHeader />

      <form
        className="w-full lg:w-3/4 max-w-xl gap-5 flex flex-col mt-7"
        onSubmit={handleSubmit(data => console.log(data))}
      >
        <CustomInput
          register={register}
          name="title"
          error={errors.title?.message}
          placeholder="عنوان مقاله را وارد کنید"
          label="عنوان مقاله"
          labelIcon={<PenIcon size={17} />}
        />

        <Controller
          name="wordpress_site_id"
          control={control}
          render={
            ({ field }) => (
              <CustomSelect
                field={field}
                label="سایت وردپرس"
                emptyOptionLabel="یک سایت انتخاب کنید"
                options={siteOptions}
                isLoading={sitesLoading}
                error={errors.wordpress_site_id?.message}
                labelIcon={<Earth size={17} />}
              />
            )
          }
        />

        <Controller
          name="article_language"
          control={control}
          render={
            ({ field }) => (
              <CustomSelect
                field={field}
                label="زبان مقاله"
                emptyOptionLabel="انتخاب زبان"
                labelIcon={<Languages size={17} />}
                options={
                  [
                    { value: "fa", label: "فارسی" },
                    { value: "en", label: "انگلیسی" },
                    { value: "auto", label: "خودکار" },
                    { value: "custom", label: "سایر" }
                  ]
                }
                error={errors.article_language?.message}
              />
            )
          }
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