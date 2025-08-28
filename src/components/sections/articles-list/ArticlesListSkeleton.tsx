import React from "react"
import Skeleton from "@/components/ui/Skeleton"

const ArticlesListSkeleton = () => {
  return (
    <div
      className="mb-10 flex flex-col gap-5 rounded-2xl"
    >
      <Skeleton className="h-18 !rounded-2xl" />

      <Skeleton className="h-18 !rounded-2xl" />

      <Skeleton className="h-18 !rounded-2xl" />

      <Skeleton className="h-18 !rounded-2xl" />

      <Skeleton className="h-18 !rounded-2xl" />
    </div>
  )
}

export default ArticlesListSkeleton