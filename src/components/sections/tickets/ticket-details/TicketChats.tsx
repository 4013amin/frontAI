import React from "react"
import TicketChatItem from "./TicketChatItem"
import { ITicketMessage } from "@/types/globa_types"

type IProps = {
  messages: ITicketMessage[]
}

const TicketChats = ({ messages }: IProps) => {
  return (
    <div className="p-5">
      {
        messages.map(msg => (
          <TicketChatItem
            key={msg.id}
            message={msg}
            isAdmin={msg.username === "admin"}
          />
        ))
      }
    </div>
  )
}

export default TicketChats