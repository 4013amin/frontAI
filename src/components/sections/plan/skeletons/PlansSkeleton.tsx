import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const PlansSkeleton = () => {
  return (
    <div className="grid !grid-cols-1 lg:!grid-cols-3 gap-5 w-full">
      <Skeleton className="h-[200px] rounded-3xl" />

      <Skeleton className="h-[200px] rounded-3xl" />

      <Skeleton className="h-[200px] rounded-3xl" />
    </div>
  )
}

export default PlansSkeleton