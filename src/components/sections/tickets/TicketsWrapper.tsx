"use client"
import React from "react"
import TicketsHeader from "./TicketsHeader"
import TicketsFaq from "./TicketsFaq"
import TicketsList from "./TicketsList"
import useGetTickets from "@/hooks/useGetTickets"

const TicketsWrapper = () => {
  const {
    tickets,
    isLoading,
    isError
  } = useGetTickets()

  console.log(tickets)

  return (
    <div>
      <TicketsHeader />

      <div
        className="flex items-start justify-center gap-8 mt-8 flex-col-reverse
       lg:!flex-row mb-10"
      >
        <TicketsList />

        <TicketsFaq />
      </div>
    </div>
  )
}

export default TicketsWrapper