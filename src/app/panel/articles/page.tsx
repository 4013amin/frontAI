import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import ArticlesWrapper from "@/components/sections/articles-list/ArticlesWrapper"

const breadcrumbItems = [
  { title: "مقالات", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <ArticlesWrapper />
    </div>
  )
}

export default page