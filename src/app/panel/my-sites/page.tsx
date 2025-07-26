"use client"
import React, { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import Breadcrumb from "@/components/ui/Breadcrumb"
import SitesList from "@/components/sections/sites-list/SitesList"
import PageHeader from "@/components/ui/PageHeader"

const breadcrumbItems = [
  { title: "سایت ها", isCurrent: true }
]

function Page() {
  const searchParams = useSearchParams()
  const message = searchParams.get("message")

  const hasShownToast = useRef(false)

  useEffect(() => {
    if (message === "no-site" && !hasShownToast.current) {
      toast.info("برای ادامه لطفا یک سایت اضافه کنید")
      hasShownToast.current = true
    }
  }, [message])


  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader title="مدیریت سایت ها" />

      <SitesList />
    </div>
  )
}

export default Page