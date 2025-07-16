"use client"
import { Plus } from "lucide-react"
import React, { memo, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import useCreateNewSite from "./hooks/useCreateNewSite"
import NewSiteFormSkeleton from "./NewSiteFormSkeleton"
import LimitAddNewSite from "./LimitAddNewSite"
import { Separator } from "@/components/shadcn/Separator"
import { NewSiteFormSchema } from "@/lib/schemas"
import { ISite } from "@/types/globa_types"
import CustomInput from "@/components/ui/CustomInput"
import CustomTextarea from "@/components/ui/CustomTexarea"
import SubmitFormButton from "@/components/ui/SubmitFormButton"

type IProps = {
  isLoadingSites: boolean
  sitesLength: number | undefined
}

const NewSiteForm = ({ isLoadingSites, sitesLength }: IProps) => {
  const {
    mutate,
    isPending,
    isSuccess
  } = useCreateNewSite()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof NewSiteFormSchema>>({
    resolver: zodResolver(NewSiteFormSchema),
    defaultValues: {
      name: "",
      site_url: "",
      username: "",
      app_password: ""
    }
  })

  const submitForm = (site: ISite) => {
    mutate(site)
  }

  useEffect(() => {
    if(isSuccess) {
      reset()
    }
  }, [isSuccess, reset])


  return (
    <div
      className="w-full lg:!w-2/5 flex flex-col justify-start p-3
        border rounded-xl"
    >
      <h2 className="flex items-center gap-2 text-bold">
        <Plus />
        افزودن سایت جدید
      </h2>

      <Separator className="my-3" />

      {isLoadingSites && <NewSiteFormSkeleton />}

      {
        !isLoadingSites && (
          sitesLength !== undefined && sitesLength === 2
            ? (
              <LimitAddNewSite />
            )
            : (
              <form
                onSubmit={handleSubmit(data => submitForm(data))}
                className="w-full flex-center flex-col gap-4"
              >
                <CustomInput
                  register={register}
                  name="name"
                  error={errors.name?.message}
                  type="text"
                  placeholder="نام نمایشی سایت"
                />

                <CustomInput
                  register={register}
                  name="site_url"
                  error={errors.site_url?.message}
                  placeholder="آدرس سایت"
                  type="text"
                />

                <CustomInput
                  register={register}
                  name="username"
                  error={errors.username?.message}
                  placeholder="نام کاربری وردپرس"
                  type="text"
                />

                <CustomTextarea
                  register={register}
                  name="app_password"
                  error={errors.app_password?.message}
                  placeholder="App password"
                />

                <SubmitFormButton 
                  text="افزودن سایت جدید"
                  isPending={isPending}
                />
              </form>
            )
        ) 
      }

    </div>
  )
}

export default memo(NewSiteForm)