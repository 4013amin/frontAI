"use client"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { UploadCloud } from "lucide-react"
import useSubmitPaymentReceipt from "./hooks/useSubmitPaymentReceipt"
import { submitPaymentReceiptSchema } from "@/lib/schemas"
import { Separator } from "@/components/shadcn/Separator"
import CustomInput from "@/components/ui/CustomInput"
import SubmitFormButton from "@/components/ui/SubmitFormButton"

interface IProps {
  planId: number
}


const SubmitPaymentForm: React.FC<IProps> = ({ planId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof submitPaymentReceiptSchema>>({
    resolver: zodResolver(submitPaymentReceiptSchema),
    defaultValues: { transaction_ref: "", payment_receipt: undefined }
  })

  const {
    mutate,
    isPending,
    isSuccess
  } = useSubmitPaymentReceipt()

  const onSubmit = (data: z.infer<typeof submitPaymentReceiptSchema>) => {
    mutate({
      transaction_ref: data.transaction_ref,
      payment_receipt: data.payment_receipt[0],
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
          <CustomInput
            placeholder="شماره پیگیری"
            register={register}
            error={errors.transaction_ref?.message}
            name="transaction_ref"
          />
        </div>

        <div>

          <input
            type="file"
            accept="image/*"
            {...register("payment_receipt")}
            className="w-full border rounded px-3 py-2"
          />

          {
            errors.payment_receipt?.message && (
              <p className="text-red-500 text-xs mt-1">{errors.payment_receipt.message as string}</p>
            )
          }
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