"use client"

import React from "react"
import TicketDetailsHeader from "./TicketDetailsHeader"
import TicketChats from "./TicketChats"
import { ITicket } from "@/types/globa_types"
import Breadcrumb from "@/components/ui/Breadcrumb"

interface Props {
  ticket: ITicket
}


const TicketDetailsClient: React.FC<Props> = ({ ticket }) => {
  const breadcrumbItems = [
    { title: "تیکت ها", link: "/panel/tickets" },
    { title: ticket.title, isCurrent: true }
  ]
    
  console.log(ticket)

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="p-2 lg:p-5 border rounded-md my-8">

        <TicketDetailsHeader {...ticket} />
        
        {ticket.messages && <TicketChats messages={ticket.messages} />}
      </div>
    </>
  )
}

export default TicketDetailsClient