import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const PaymentDetailSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Skeleton className="w-full h-8 runded-xl" />

      <Skeleton className="w-full h-8 runded-xl" />

      <Skeleton className="w-full h-8 runded-xl" />
      
      <Skeleton className="w-full h-8 runded-xl" />

    </div>
  )
}

export default PaymentDetailSkeleton