"use client"

import React from "react"
import { ITicket } from "@/types/globa_types"

interface Props {
  ticket: ITicket
}

const TicketDetailsClient: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="p-5 border rounded-md shadow-sm">
      <h1 className="text-xl font-bold mb-3">{ticket.title}</h1>

      <p className="mb-2">{ticket.message}</p>

      {
        ticket.attachment && (
          <div className="mt-4">
            <img
              src={ticket.attachment}
              alt="ticket attachment"
              className="max-w-sm rounded-md border"
            />
          </div>
        )
      }
    </div>
  )
}

export default TicketDetailsClient