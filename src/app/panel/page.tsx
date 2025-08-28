import { Metadata } from "next"
import React from "react"
import "@/styles/dashboard.css"
import DashboardWrapper from "@/components/sections/dashboard/DashboardWrapper"

export const metadata: Metadata = {
  title: "داشبورد بینام",
  description: "تولید محتوای هوشمند"
}


const page = () => {
  return (
    <DashboardWrapper />
  )
}

export default page