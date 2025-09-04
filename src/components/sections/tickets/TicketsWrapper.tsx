"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import TicketsHeader from "./TicketsHeader"
import TicketsFaq from "./TicketsFaq"
import TicketsList from "./TicketsList"
import TicketsListSkeleton from "./TicketsListSkeleton"
import useGetTickets from "@/hooks/useGetTickets"
import NotLoadErorr from "@/components/ui/NotLoadErorr"
import { Button } from "@/components/shadcn/Button"

const TicketsWrapper = () => {
  const {
    tickets,
    isLoading,
    isError
  } = useGetTickets()

  // Error
  if (isError) {
    return (
      <div>
        <TicketsHeader />

        <div className="flex items-start justify-between gap-8 mt-8 flex-col-reverse lg:!flex-row mb-10">
          <NotLoadErorr />

          <TicketsFaq />
        </div>
      </div>
    )
  }

  // IsLoading
  if (isLoading) {
    return (
      <div>
        <TicketsHeader />

        <div className="flex items-start justify-between gap-8 mt-8 !flex-col lg:!flex-row mb-10">
          <div
            className="w-full lg:!w-8/12 border rounded-lg flex items-center justify-center
            flex-col"
          >
            <TicketsListSkeleton />
          </div>

          <TicketsFaq />
        </div>
      </div>
    )
  }

  // Empty
  if (!tickets?.length) {
    return (
      <div>
        <TicketsHeader />

        <div className="flex items-start justify-between gap-8 mt-8 flex-col lg:!flex-row mb-10">
          <div className="flex items-center justify-center w-full lg:!w-8/12 mt-5 flex-col">
            <Image 
              src="/images/chara-robo/tickets-cr.webp"
              width={250}
              height={250}
              alt="robot support"
              className="w-35"
            />

            <h2
              className="font-bold mt-2"
            >لیست تیکت‌های شما خالی است
            </h2>

            <Button
              className="font-light text-sm bg-blue-500 hover:bg-blue-600
              dark:text-white mt-5"
            >
              <Link
                href="/panel/tickets/create" 
                className="flex items-center gap-2"
              >
                ایجاد تیکت جدید
              </Link>
            </Button>
          </div>

          <TicketsFaq />
        </div>
      </div>
    )
  }

  // Show list
  return (
    <div>
      <TicketsHeader />

      <div className="flex items-start justify-between gap-8 mt-8 flex-col lg:!flex-row mb-10">
        <TicketsList tickets={tickets} />

        <TicketsFaq />
      </div>
    </div>
  )
}

export default TicketsWrapper