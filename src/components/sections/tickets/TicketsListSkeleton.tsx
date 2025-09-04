import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const TicketsListSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 w-full p-2">
      <Skeleton className="w-[100%] h-16" />

      <Skeleton className="w-[100%] h-16" />

      <Skeleton className="w-[100%] h-16" />
   

    </div>
  )
}

export default TicketsListSkeleton