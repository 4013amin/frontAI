import React from "react"
import Link from "next/link"
import { Badge } from "@/components/shadcn/Badge"
import { IArticle } from "@/types/globa_types"


type IProps = {
  ticket: IArticle
}

const statusStyles: Record<string, string> = {
  in_progress: "bg-yellow-100 text-yellow-700 dark:bg-yellow-600/20 dark:text-yellow-400",
  closed: "bg-red-100 text-red-700 dark:bg-red-600/20 dark:text-red-400",
  open: "bg-green-100 text-green-700 dark:bg-green-600/20 dark:text-green-400"
}


const DashboardTicketItem = ({ ticket }: IProps) => {
  return (
    <div 
      key={ticket.id} 
      className="flex justify-between gap-3 my-3 
      flex-col md:!flex-row w-full"
    >
      <Link 
        href={`/panel/tickets/${ticket.id}`} 
        target="_blank" 
        rel="nofollow"
        className="truncate max-w-full md:max-w-[calc(100%-80px)] 
        text-sm hover:text-blue-500 font-bold text-zinc-800 dark:text-zinc-100
        dark:hover:text-blue-500"
        title={ticket.title}
      >
        {ticket.title}
      </Link>

      <Badge
        className={
          `
        pt-[2px] mr-auto 
         ${statusStyles[ticket.status] || "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"}
          `
        }
      >
        {ticket.status_display}
      </Badge>

      <hr className="my-3 md:!hidden" />
    </div>
  )
}

export default DashboardTicketItem