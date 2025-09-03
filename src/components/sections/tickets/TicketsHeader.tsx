import React from "react"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/shadcn/Button"

const TicketsHeader = () => {
  return (
    <>
      <div
        className="w-full bg-slate-100 rounded-lg flex justify-between items-center
        p-3 dark:bg-zinc-800"
      >
        <h1 className="font-bold text-lg">تیکت‌ها</h1>


        <Button
          className="font-light text-sm bg-blue-500 hover:bg-blue-600
        dark:text-white"
        >
          <Link
            href="/panel/tickets/create" 
            className="flex items-center gap-2"
          >
            ایجاد تیکت جدید
            <Plus />
          </Link>
        </Button>
      </div>
    </>
  )
}

export default TicketsHeader