import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"

const breadcrumbItems = [
  { title: "سایت ها", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  )
}

export default page