import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const NewSiteFormSkeleton = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <Skeleton className="w-full h-10" />

      <Skeleton className="w-full h-10" />

      <Skeleton className="w-full h-10" />

      <Skeleton className="w-full h-16" />
      
      <Skeleton className="w-full h-10" />
    </div>
  )
}

export default NewSiteFormSkeleton