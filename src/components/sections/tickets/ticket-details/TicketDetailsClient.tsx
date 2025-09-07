"use client"

import React from "react"
import { Loader2 } from "lucide-react"
import useGetSingleTicket from "../hooks/useGetSingleTicket"
import TicketChats from "./TicketChats"
import AddMessageForm from "./AddMessageForm"
import TicketDetailsHeader from "./TicketDetailsHeader"
import Breadcrumb from "@/components/ui/Breadcrumb"


const TicketDetailsClient = ({ id }: { id: string }) => {
  const {
    data: ticket,
    isLoading,
    isError
  } = useGetSingleTicket(id)

  const breadcrumbItems = [
    { title: "تیکت ها", link: "/panel/tickets" },
    { title: "جزییات تیکت", isCurrent: true }
  ]

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  if (isError || !ticket) {
    return <p className="text-red-500">خطا در دریافت اطلاعات تیکت</p>
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="p-2 lg:p-5 border rounded-md my-8">

        <TicketDetailsHeader {...ticket} />
        
        {ticket.messages && <TicketChats messages={ticket.messages} />}

        {
          ticket.status !== "closed" && (
            <AddMessageForm {...ticket} />
          )
        }
      </div>
    </>
  )
}

export default TicketDetailsClient