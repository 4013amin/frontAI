import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CreateArticleMain from "@/components/sections/create-article/CreateArticleMain"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <CreateArticleMain />
    </div>
  )
}

export default page