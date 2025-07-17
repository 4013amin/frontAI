"use client"
import React from "react"
import { ListTodo } from "lucide-react"
import useGetPlans from "@/hooks/useGetPlans"
import Skeleton from "@/components/ui/Skeleton"
import NotLoadError from "@/components/ui/NotLoadErorr"
import type { IPlan } from "@/types/globa_types"
import { Separator } from "@/components/shadcn/Separator"

interface IProps {
  planId: number
}

const PaymentDetails: React.FC<IProps> = ({ planId }) => {
  const {
    plans,
    isLoading,
    isError
  } = useGetPlans()

  if (isLoading) return <Skeleton className="w-full h-12" />

  if (isError || !plans) return <NotLoadError />

  const selectedPlan = plans.find((plan: IPlan) => plan.id === planId)

  if (!selectedPlan) {
    return <div className="text-sm text-red-500">پلن انتخاب‌شده پیدا نشد.</div>
  }

  return (
    <div className="w-full">
      <h2 className="flex items-center gap-2 font-bold ">
        <ListTodo />
        جزییات پلن انتخاب شده
      </h2>

      <Separator className="my-3" />

      <div className="flex gap-2 flex-col">
        <div className="flex gap-2">
          <strong>نام پلن:</strong>

          {selectedPlan.title}
        </div>

        <div className="flex gap-2">
          <strong>قیمت:</strong> 

          {selectedPlan.price.toLocaleString()} تومان
        </div>

        <div className="flex gap-2">
          <strong>مدت:</strong> 

          {selectedPlan.duration_months} ماه
        </div>

        <div className="flex gap-2">
          <strong>توضیحات:</strong>

          {selectedPlan.description || "ندارد"}
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails