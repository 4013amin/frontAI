import React from "react"
import NewTicketForm from "./NewTicketForm"

const NewTicketWrapper = () => {
  return (
    <div
      className="rounded-lg border p-4 lg:w-8/12 mx-auto flex flex-col
    items-center justify-center"
    >

      <h1 className="font-bold text-xl mt-3">ایجاد تیکت جدید</h1>

      <span
        className="text-gray-600 dark:text-gray-400 text-sm mt-2 
      block"
      >لطفاً مشکل خود را با جزئیات کامل شرح دهید تا تیم پشتیبانی 
        بتواند در سریع‌ترین زمان ممکن به شما کمک کند.
      </span>

      <NewTicketForm />
    </div>
  )
}

export default NewTicketWrapper