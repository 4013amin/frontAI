"use client"
import React from "react"
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
      }

    </div>
  )
}

export default PaymentsList