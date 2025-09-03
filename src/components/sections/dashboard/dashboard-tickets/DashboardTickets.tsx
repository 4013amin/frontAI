import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"
import DashboardArticlesItem from "./DashboardTicketItem"
import { Button } from "@/components/shadcn/Button"
import { IArticle } from "@/types/globa_types"


type IProps = {
  tickets: IArticle[]
}


const DashboardTickets = ({ tickets }: IProps) => {
  return (
    <div className="border rounded-lg p-4 w-full lg:!w-5/12 dark:bg-zinc-900">

      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-[15px] lg:!text-[17px] font-bold"> آخرین تیکت‌ها </h4>

        <Link 
          href="/panel/support"
          className="flex items-center justify-content-end gap-2 text-sm text-blue-500
                      hover:text-blue-600 group transition-all duration-150 ease-in"
        >
          مشاهده همه
          <ArrowLeft
            size={18} 
            className="transition-transform duration-150 ease-in-out group-hover:translate-x-1"
          />
        </Link>

      </div>

      <hr className="h-1 w-full my-5" />

      {/* Section content */}
      <ul>
        {
          !tickets.length
            ? (
              <div className="flex gap-4 items-center justify-center flex-col">
                <h2> تیکتی ندارید </h2>

                <Button
                  className="group text-xs border border-blue-400 bg-blue-300/30 
                              text-blue-500 transition-all hover:bg-bluse-300 dark:text-blue-500
                             duration-150 dark:bg-blue-600/15 dark:border-blue-500/29"
                >
                  <Link href="/panel/support/create">
                    ایجاد تیکت جدید
                  </Link>
                </Button>
              </div>
            )
            : (
              <div>
                {
                  tickets.map(ticket => (
                    <DashboardArticlesItem key={ticket.id} ticket={ticket} />
                  ))
                }
              </div>

            )
        }
      </ul>
    </div>
  )
}

export default DashboardTickets