import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import TicketsWrapper from "@/components/sections/tickets/TicketsWrapper"

const breadcrumbItems = [
  { title: "پشتیبانی", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <TicketsWrapper />
    </div>
  )
}

export default page