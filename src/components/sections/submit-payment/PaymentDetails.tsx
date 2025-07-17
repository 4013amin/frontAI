"use client"
import React from "react"
import { ListTodo } from "lucide-react"
import PaymentDetailSkeleton from "./PaymentDetailSkeleton"
import useGetPlans from "@/hooks/useGetPlans"
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

  const selectedPlan = plans?.find((plan: IPlan) => plan.id === planId)


  return (
    <div className="w-full">
      <h2 className="flex items-center gap-2 font-bold ">
        <ListTodo />
        جزییات پلن انتخاب شده
      </h2>

      <Separator className="my-3" />

      {isError && <NotLoadError /> }

      {
        isLoading
          ? <PaymentDetailSkeleton />
          : (
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2">
                <strong>نام پلن:</strong>

                {selectedPlan?.title}
              </div>

              <div className="flex gap-2">
                <strong>قیمت:</strong> 

                {selectedPlan?.price.toLocaleString()} تومان
              </div>

              <div className="flex gap-2">
                <strong>مدت:</strong> 

                {selectedPlan?.duration_months} ماه
              </div>

              <div className="flex gap-2">
                <strong>توضیحات:</strong>

                {selectedPlan?.description || "ندارد"}
              </div>
            </div>
          )
      }
    </div>
  )
}

export default PaymentDetails