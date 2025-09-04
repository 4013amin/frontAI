import React from "react"
import Link from "next/link"
import { ITicket } from "@/types/globa_types"
import { Badge } from "@/components/shadcn/Badge"
import { convertToShamsi } from "@/utility/convertToShamsi"

const statusStyles: Record<string, string> = {
  in_progress: "bg-yellow-100 text-yellow-700 dark:bg-yellow-600/20 dark:text-yellow-400",
  closed: "bg-red-100 text-red-700 dark:bg-red-600/20 dark:text-red-400",
  open: "bg-green-100 text-green-700 dark:bg-green-600/20 dark:text-green-400"
}

const TicketListItem = (props: ITicket) => {
  const {
    title,
    id,
    status,
    status_display,
    updated_at
  } = props

  const lastUpdate = convertToShamsi(updated_at)
  return (
    <Link
      href={`/panel/tickets/${id}`}
      className="gap-4 p-4 lg:!items-center border-b hover:bg-gray-50 dark:hover:bg-muted/50
        flex w-full flex-col items-start lg:!grid grid-cols-[3fr_1fr_100px]"
    >
      <h4 className="font-bold truncate text-[15px] w-full">{title}</h4>

      <div className="flex items-center justify-between w-full lg:!justify-center">
        <div
          className="text-[12px] !flex flex-row-reverse lg:!flex-col !items-center 
        text-slate-700 !text-center gap-2 lg:gap-0 dark:text-zinc-400"
        >
          <span>{lastUpdate.date}</span>
    
          <span>{lastUpdate.time.slice(0, 5)}</span>
        </div>

        <Badge
          className={
            `
          lg:!hidden pt-[2px]
         ${statusStyles[status] || "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"}
          `
          }
        >
          {status_display}
        </Badge>

      </div>


      <Badge
        className={
          `
        !hidden lg:!flex pt-[2px] mx-auto
         ${statusStyles[status] || "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"}
          `
        }
      >
        {status_display}
      </Badge>
    </Link>
  )
}

export default TicketListItem