"use client"

import { useParams } from "next/navigation"
import PaymentDetails from "@/components/sections/submit-payment/PaymentDetails"
import PaymentSteps from "@/components/sections/submit-payment/PaymentSteps"
import SubmitPaymentForm from "@/components/sections/submit-payment/SubmitPaymentForm"
import Breadcrumb from "@/components/ui/Breadcrumb"
import PageHeader from "@/components/ui/PageHeader"

const Page = () => {
  const params = useParams()
  const id = params?.id

  const breadcrumbItems = [
    { title: "پرداخت ها", link: "/panel/payments" },
    { title: "ثبت پرداخت جدید", isCurrent: true }
  ]

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader title="ثبت فیش پرداخت" />

      {
        id && (
          <div
            className="flex flex-col lg:!flex-row gap-5 w-full 
          justify-start items-start"
          >
            <div className="w-full lg:!w-3/5 flex flex-col items-start justify-start">
              <PaymentSteps />

              <SubmitPaymentForm planId={Number(id)} />
            </div>

            <div
              className="w-full lg:!w-2/5 flex flex-col items-start justify-start p-3
            border rounded-xl"
            >
              <PaymentDetails planId={Number(id)} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Page