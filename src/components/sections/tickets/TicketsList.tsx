import React from "react"
import TicketListItem from "./TicketListItem"
import TicketListHeader from "./TicketListHeader"
import { ITicket } from "@/types/globa_types"

type IProps = {
  tickets: ITicket[]
}

const TicketsList = ({ tickets }: IProps) => {
  return (
    <section
      className="w-full lg:!w-8/12 border rounded-lg flex items-center justify-center
       flex-col overflow-hidden"
    >
      <TicketListHeader />

      {
        tickets.map(ticket => (
          <TicketListItem key={ticket.id} {...ticket} />
        ))
      }
    </section>
  )
}

export default TicketsList