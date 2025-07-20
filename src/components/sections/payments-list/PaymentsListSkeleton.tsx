import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const PaymentsListSkeleton = () => {
  return (
    <div className="grid !grid-cols-1 lg:!grid-cols-3 gap-5 w-full items-start mb-10">
      <Skeleton className="h-52 !rounded-2xl" />

      <Skeleton className="h-52 !rounded-2xl" />

      <Skeleton className="h-52 !rounded-2xl" />
    </div>
  )
}

export default PaymentsListSkeleton