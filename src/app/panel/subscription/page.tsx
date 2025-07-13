import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Plans from "@/components/sections/plan/Plans"

const breadcrumbItems = [
  { title: "اشتراک من", isCurrent: true }
]

function page() {


  return (
    <article>
      <Breadcrumb items={breadcrumbItems} />

      <Plans />
    </article>
  )
}

export default page