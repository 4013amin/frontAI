import React from "react"

const TicketListHeader = () => {

  return (
    <div className="hidden w-full md:!grid grid-cols-[3fr_1fr_100px] gap-4 bg-gray-100/50 dark:bg-muted p-4">
      <div className="font-medium">عنوان</div>

      <div className="font-medium text-center">بروزرسانی</div>

      <div className="font-medium text-center">وضعیت</div>
    </div>
  )
}

export default TicketListHeader