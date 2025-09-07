"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import useCreateTicket from "../hooks/useCreateTicket"
import ImageUploader from "@/components/ui/ImageUploader"
import CustomInput from "@/components/ui/CustomInput"
import CustomTextarea from "@/components/ui/CustomTexarea"
import { NewTicketFormSchema } from "@/lib/schemas"
import SubmitFormButton from "@/components/ui/SubmitFormButton"


const NewTicketForm = () => {
  const { createTicket, isPending } = useCreateTicket()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof NewTicketFormSchema>>({
    resolver: zodResolver(NewTicketFormSchema),
    defaultValues: {
      title: "",
      message: "",
      attachment: undefined
    }
  })

  const onSubmit = (data: z.infer<typeof NewTicketFormSchema>) => {
    createTicket(data)
  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-3/4 max-w-xl gap-5 flex flex-col mt-7"
    >
      {/* Title */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">عنوان تیکت</label>

        <CustomInput
          type="text"
          name="title"
          error={errors.title?.message}
          register={register}
          placeholder="عنوان تیکت را وارد کنید"
        />
      </div>

      {/* message */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">توضیحات</label>

        <CustomTextarea
          name="message"
          error={errors.message?.message}
          register={register}
          placeholder="توضیحات مربوط به تیکت"
          rows={3}
        />
      </div>

      {/* Upload attachment */}
      <div>
        <label
          className="text-sm font-medium mb-3 block"
        >
          فایل پیوست
          <span className="text-xs text-blue-500"> (اختیاری) </span>

        </label>

        <ImageUploader
          field={register("attachment")}
          error={
            typeof errors.attachment?.message === "string" ?
              errors.attachment.message
              : undefined
          }
        />

      </div>

      {/* Submit Button*/}
      <SubmitFormButton isPending={isPending} text="ارسال تیکت" />
    </form>
  )
}

export default NewTicketForm