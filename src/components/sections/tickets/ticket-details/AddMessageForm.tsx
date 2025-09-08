"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import useSendTicketMessage from "../hooks/useSendTicketMessage"
import ImageUploader from "@/components/ui/ImageUploader"
import CustomTextarea from "@/components/ui/CustomTexarea"
import SubmitFormButton from "@/components/ui/SubmitFormButton"
import { ITicket } from "@/types/globa_types"
import { TicketMessageSchema } from "@/lib/schemas"


type INewMessage = z.infer<typeof TicketMessageSchema>

const AddMessageForm = ({ id }: ITicket) => {
  const { sendMessage, isPending } = useSendTicketMessage(id)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<INewMessage>({
    resolver: zodResolver(TicketMessageSchema),
    defaultValues: {
      message: "",
      attachment: undefined
    }
  })

  const onSubmit = (data: INewMessage) => {
    sendMessage(data, {
      onSuccess: () => {
        reset() 
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-5 flex flex-col mt-7 bg-gray-100 dark:bg-zinc-700 p-8 rounded-lg"
    >
      <h2 className="text-lg font-bold">پاسخ جدید</h2>

      {/* message */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">توضیحات</label>

        <CustomTextarea
          name="message"
          error={errors.message?.message}
          register={register}
          placeholder="توضیحات خود را اینجا بنویسید..."
          rows={3}
        />
      </div>

      {/* Upload attachment */}
      <div>
        <label className="text-sm font-medium mb-3 block">
          فایل پیوست
          <span className="text-xs text-blue-500 dark:text-blue-300"> (اختیاری) </span>
        </label>

        <ImageUploader
          field={register("attachment")}
          error={
            typeof errors.attachment?.message === "string"
              ? errors.attachment.message
              : undefined
          }
        />
      </div>

      {/* Submit Button */}
      <SubmitFormButton isPending={isPending} text="ثبت پاسخ جدید" />
    </form>
  )
}

export default AddMessageForm