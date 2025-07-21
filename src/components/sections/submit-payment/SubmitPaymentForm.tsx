"use client"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { UploadCloud } from "lucide-react"
import useSubmitPaymentReceipt from "./hooks/useSubmitPaymentReceipt"
import { SubmitPaymentReceiptSchema } from "@/lib/schemas"
import { Separator } from "@/components/shadcn/Separator"
import SubmitFormButton from "@/components/ui/SubmitFormButton"
import ImageUploader from "@/components/ui/ImageUploader"

interface IProps {
  planId: number
}


const SubmitPaymentForm: React.FC<IProps> = ({ planId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof SubmitPaymentReceiptSchema>>({
    resolver: zodResolver(SubmitPaymentReceiptSchema),
    defaultValues: { 
      payment_receipt: undefined 
    }
  })

  const {
    mutate,
    isPending,
    isSuccess
  } = useSubmitPaymentReceipt()

  const onSubmit = (data: z.infer<typeof SubmitPaymentReceiptSchema>) => {
    mutate({
      payment_receipt: data.payment_receipt,
      plan: planId
    })
  }

  useEffect(() => {
    if(isSuccess) reset()
  }, [isSuccess, reset])

  return (
    <div className="w-full mx-auto border rounded-lg p-3 mt-4">
      <h2 className="flex items-center gap-2 font-bold ">
        <UploadCloud />
        ارسال فیش پرداخت
      </h2>

      <Separator className="my-3" />

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-3"
      >
        <div>
          <span className="block mt-2 mb-1 text-sm">انتخاب تصویر فیش</span>

          <ImageUploader
            field={register("payment_receipt")}
            error={
              typeof errors.payment_receipt?.message === "string" ?
                errors.payment_receipt.message
                : undefined
            }
          />

        </div>

        <SubmitFormButton
          isPending={isPending}
          text="ارسال فیش"
        />
      </form>

    </div>
  )
}

export default SubmitPaymentForm