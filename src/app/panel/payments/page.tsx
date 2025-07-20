import React from "react"
import Breadcrumb from "@/components/ui/Breadcrumb"
import PageHeader from "@/components/ui/PageHeader"
import PaymentsList from "@/components/sections/payments-list/PaymentsList"

const breadcrumbItems = [
  { title: "پرداخت ها", isCurrent: true }
]

const page = () => {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader title="لیست پرداخت ها" />

      <PaymentsList />

    </>
  )
}

export default page