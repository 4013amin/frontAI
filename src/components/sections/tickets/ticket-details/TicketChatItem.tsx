import React from "react"
import { ITicketMessage } from "@/types/globa_types"
import { convertToShamsi } from "@/utility/convertToShamsi"

type IProps = {
  message: ITicketMessage
  isAdmin: boolean
}

const TicketChatItem = ({ message, isAdmin }: IProps) => {
  const formattedDate = convertToShamsi(message.created_at).date
  const formattedTime = convertToShamsi(message.created_at).time.slice(0, 5)

  return (
    <div className={`flex mb-4 ${isAdmin ? "justify-end" : "justify-start"}`}>
      <div
        className={
          `
          relative !max-w-[80%] lg:!max-w-[70%] p-4 rounded-2xl shadow-md
          ${isAdmin 
      ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
      : "bg-blue-500 text-white dark:bg-blue-600"}
          after:absolute after:bottom-0 after:left-0 after:ml-[-6px] after:border-t-8 after:border-t-transparent
          ${isAdmin
      ? "after:border-l-8 after:border-l-gray-200 dark:after:border-l-gray-700" 
      : "after:right-0 after:mr-[-6px] after:border-r-8 after:border-r-blue-500 dark:after:border-r-blue-600"} 
        `
        }
      >
        <p className="whitespace-pre-wrap">{message.message}</p>

        {
          message.attachment && (
            <div className="mt-2">
              <a
                href={message.attachment}
                target="_blank"
                className="underline text-sm"
              >
                مشاهده فایل
              </a>
            </div>
          )
        }

        <div
          className={
            `text-xs mt-2 block text-right
         !flex items-center gap-1 ${!isAdmin? "text-white/50" : "text-gray-500/50 dark:text-gray-300/50"}`
          }
        >
          <span>
            {formattedDate} 
          </span>

          - 

          <span>
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TicketChatItem