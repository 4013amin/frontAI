"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import TicketDetailsClient from "@/components/sections/tickets/ticket-details/TicketDetailsClient"

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) {
    redirect("/auth/login")
  }

  return <TicketDetailsClient id={id} />
}

export default Page