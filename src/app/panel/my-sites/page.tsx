import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import SitesList from "@/components/sections/sites-list/SitesList"
import PageHeader from "@/components/ui/PageHeader"
import NewSiteForm from "@/components/sections/new-site-form/NewSiteForm"

const breadcrumbItems = [
  { title: "سایت ها", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader title="مدیریت سایت ها" />

      <div
        className="flex flex-col lg:!flex-row gap-5 w-full 
        justify-start items-start"
      >
        <SitesList />

        <NewSiteForm />
      </div>

    </div>
  )
}

export default page