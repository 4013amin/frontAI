import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const SitesListSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Skeleton className="w-full h-14 runded-xl" />

      <Skeleton className="w-full h-14 runded-xl" />

      <Skeleton className="w-full h-14 runded-xl" />
    </div>
  )
}

export default SitesListSkeleton