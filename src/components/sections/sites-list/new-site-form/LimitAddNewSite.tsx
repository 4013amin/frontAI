import { AlertCircleIcon } from "lucide-react"
import React from "react"

const LimitAddNewSite = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center my-5">
      <AlertCircleIcon className="text-orange-600" />

      <p className="text-sm text-orange-700 font-bold">شما به حد نصاب تعداد سایت مجاز رسیده‌اید</p>

      <p className="text-sm text-orange-700 font-bold">نمی‌توانید سایت جدیدی اضافه کنید</p>
    </div>
  )
}

export default LimitAddNewSite