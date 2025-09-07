import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import NewTicketWrapper from "@/components/sections/tickets/new-ticket/NewTicketWrapper"

const breadcrumbItems = [
  {
    title: "تیکت ها", isCurrent: false, link: "/panel/tickets"  
  }, 
  { title: "ایجاد تیکت جدید", isCurrent: true }

]

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={breadcrumbItems} />

      <NewTicketWrapper />
    </div>
  )
}

export default page