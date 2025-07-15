"use client"
import { Plus } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import useCreateNewSite from "./hooks/useCreateNewSite"
import { Separator } from "@/components/shadcn/Separator"
import { NewSiteFormSchema } from "@/lib/schemas"
import { ISite } from "@/types/globa_types"
import CustomInput from "@/components/ui/CustomInput"

const NewSiteForm = () => {
  const {
    mutate,
    isPending,
    isSuccess,
    isError
  } = useCreateNewSite()

  const {
    register,
    handleSubmit,
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


  return (
    <div
      className="lg:w-2/5 flex flex-col items-start justify-center p-3
        border rounded-xl"
    >
      <h2 className="flex items-center gap-2 text-bold">
        <Plus />
        افزودن سایت جدید
      </h2>

      <Separator className="my-3" />

      <form
        onSubmit={handleSubmit(data => submitForm(data))}
        className="w-full flex-center flex-col gap-4"
      >
        <CustomInput
          register={register}
          name="name"
          error={errors.name?.message}
          label="نام نمایشی"
        />
      </form>


    </div>
  )
}

export default NewSiteForm