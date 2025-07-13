import React from "react"
import Breadcrumb from "@/components/shared/Breadcrumb"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  )
}

export default page