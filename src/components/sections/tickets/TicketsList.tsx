import React from "react"
import { ITicket } from "@/types/globa_types"

type IProps = {
  tickets: ITicket[]
}

const TicketsList = ({ tickets }: IProps) => {
  console.log(tickets)
  return (
    <section
      className="w-full lg:!w-8/12 p-4 border rounded-lg flex items-center justify-center
      gap-1 flex-col"
    >
        
    </section>
  )
}

export default TicketsList