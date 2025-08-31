import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const DashboardSkeleton = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      {/* HERO  */}
      <div className="w-full flex flex-col items-center justify-center">

        <Skeleton className="h-24 w-24  !rounded-full" />

        <Skeleton className="h-4 w-46 !rounded-lg mt-4" />

        <Skeleton className="h-2 w-64 !rounded-lg mt-2" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-4 w-full mt-10">
        <Skeleton className="h-36 w-full !rounded-xl mt-2" />

        <Skeleton className="h-36 w-full !rounded-xl mt-2" />

        <Skeleton className="h-36 w-full !rounded-xl mt-2" />

        <Skeleton className="h-36 w-full !rounded-xl mt-2" />
      </div>
    </div>
  )
}

export default DashboardSkeleton