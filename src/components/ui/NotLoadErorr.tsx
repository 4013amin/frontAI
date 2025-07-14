import { AlertCircleIcon } from "lucide-react"
import React from "react"

const NotLoadErorr = () => {
  return (
    <div className="flex-center flex-col gap-3 text-center text-red-500">
      <AlertCircleIcon />

      <span>خطا در دریافت اطلاعات!</span>
    </div>
  )
}

export default NotLoadErorr