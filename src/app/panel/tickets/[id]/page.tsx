"use server"

import { notFound, redirect } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"
import { MessageCircleWarning } from "lucide-react"
import TicketDetailsClient from "@/components/sections/tickets/ticket-details/TicketDetailsClient"
import { ITicket } from "@/types/globa_types"
import { Button } from "@/components/shadcn/Button"

const getTicket = async (id: string, token: string): Promise<ITicket | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}tickets/${id}/`,
      {
        headers: {
          Authorization: `Token ${token}`,
          Accept: "application/json"
        },
        cache: "no-store"
      }
    )

    if (res.status === 404) {
      return null
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch ticket: ${res.status}`)
    }

    const data = (await res.json()) as ITicket
    return data
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching ticket:", error)
    throw error
  }
}

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) {
    redirect("/auth/login")
  }

  let ticket: ITicket | null = null

  try {
    ticket = await getTicket(id, token)
    if (!ticket) {
      return notFound()
    }
  }
  catch {
    return (
      <div className="flex items-center justify-center h-[400px] flex-col">
        <MessageCircleWarning size={50} className="mb-8" />

        <h2 className="text-2xl font-bold ">تیکت مورد نظر پیدا نشد!</h2>

        <Link href="/panel/tickets" className="mt-8">
          <Button variant="default">
            بازگشت به لیست تیکت ها
          </Button>
        </Link>
      </div>
    )
  }

  return <TicketDetailsClient ticket={ticket} />
}

export default Page