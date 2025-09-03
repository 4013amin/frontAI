"use client"
import React from "react"
import TicketsHeader from "./TicketsHeader"
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
    </div>
  )
}

export default TicketsWrapper