import React from "react"
import { Badge } from "@/components/shadcn/Badge"

type IProps = {
  title: string
  status: "open" | "in_progress" | "closed" 
  status_display: string
}

const statusStyles: Record<string, string> = {
  in_progress: "bg-yellow-100 text-yellow-700 dark:bg-yellow-600/20 dark:text-yellow-400",
  closed: "bg-red-100 text-red-700 dark:bg-red-600/20 dark:text-red-400",
  open: "bg-green-100 text-green-700 dark:bg-green-600/20 dark:text-green-400"
}


const TicketDetailsHeader = (props: IProps) => {
  const{
    title,
    status,
    status_display
  } = props

  return (
    <div className="flex items-center justify-between gap-2 bg-slate-50 p-3 rounded-lg dark:bg-zinc-900">
      <h1 className="font-bold text-lg lg:text-xl truncate">{title}</h1>

      <Badge
        className={
          `
        pt-[2px]
         ${statusStyles[status] || "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"}
          `
        }
      >
        {status_display}
      </Badge>
    </div>
  )
}

export default TicketDetailsHeader