import { Metadata } from "next"
import React from "react"
import DashboardHero from "@/components/sections/dashboard/hero/DashboardHero"
import "@/styles/dashboard.css"

export const metadata: Metadata = {
  title: "داشبورد بینام",
  description: "تولید محتوای هوشمند"
}


const page = () => {
  return (
    <div>
      <div
        className="w-screen h-[500px] bg-[url('/images/dashboard-hero-bg.svg')] bg-cover bg-center
      absolute top-0 right-0"
      >
      </div>

      <DashboardHero />
    </div>
  )
}

export default page