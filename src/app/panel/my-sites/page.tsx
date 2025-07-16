import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import SitesList from "@/components/sections/sites-list/SitesList"
import PageHeader from "@/components/ui/PageHeader"

const breadcrumbItems = [
  { title: "سایت ها", isCurrent: true }
]

function page() {

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader title="مدیریت سایت ها" />

      <SitesList />

    </div>
  )
}

export default page