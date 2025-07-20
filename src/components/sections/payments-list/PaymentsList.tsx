"use client"
import React from "react"
import { CircleCheck } from "lucide-react"
import Link from "next/link"
import PaymentItem from "./PaymentItem"
import PaymentsListSkeleton from "./PaymentsListSkeleton"
import useGetPayments from "@/hooks/useGetPayments"
import { IPayment } from "@/types/globa_types"
import NotLoadErorr from "@/components/ui/NotLoadErorr"

const PaymentsList = () => {
  const {
    isLoading,
    isError,
    payments
  } = useGetPayments()


  return (
    <div>

      {
        isLoading
          ? (
            <PaymentsListSkeleton />
          )
          : isError
            ? (
              <NotLoadErorr />
            )
            : (
              payments?.length
                ? (
                  <div className="grid !grid-cols-1 lg:!grid-cols-3 gap-5 w-full items-start mb-10">
                    {
                      payments?.map((payment: IPayment) => (
                        <PaymentItem  
                          key={payment.id}
                          payment={payment}
                        />

                      ))
                    }
                  </div>
                )
                : (
                  <div className="my-12 flex-center flex-col gap-2">
                    <CircleCheck size={32} />

                    <h2 className="font-bold text-lg mt-3">لیست پرداخت های شما خالی است</h2>

                    <span
                      className="text-sm text-zinc-600 
                      dark:text-zinc-400"
                    >
                      برای مشاهده پلن ها روی دکمه زیر کلیک کنید
                    </span>

                    <Link 
                      href="/panel/subscription"
                      className="bg-blue-500 text-white py-2 px-3 rounded-lg text-sm mt-3"
                    >
                      مشاهده اشتراک ها
                    </Link>
                  </div>
                )
            )
      }

    </div>
  )
}

export default PaymentsList