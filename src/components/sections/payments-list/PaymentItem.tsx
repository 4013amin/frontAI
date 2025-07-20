import React from "react"
import { IPayment } from "@/types/globa_types"

interface PaymentItemProps {
  payment: IPayment
}

const PaymentItem = ({ payment }: PaymentItemProps) => {
  return (
    <div
      className="rounded-2xl border border-zinc-300 dark:border-zinc-700 p-4 flex flex-col gap-2"
    >
      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">پلن</span>

        <span className="font-medium">{payment.plan_title}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">مبلغ</span>

        <span className="font-medium">{payment.amount.toLocaleString()} تومان</span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">تاریخ</span>

        <span className="font-medium">
          {new Date(payment.created_at).toLocaleDateString("fa-IR")}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">وضعیت</span>

        <span
          className={
            `text-xs font-semibold px-2 py-1 rounded-full ${
              payment.status === "approved"
                ? "bg-green-100 dark:bg-green-300/30 text-green-700 dark:text-green-500"
                : payment.status === "pending"
                  ? "bg-yellow-100 dark:bg-yellow-300/30 text-yellow-700 dark:text-yellow-500"
                  : "bg-red-100 dark:bg-red-300/30 text-red-700 dark:text-red-500"
            }`
          }
        >
          {payment.status_display}
        </span>
      </div>

      {
        payment.admin_notes && (
          <div className="text-sm text-muted-foreground">
            <span className="block text-xs">یادداشت ادمین:</span>

            <span className="text-sm">{payment.admin_notes}</span>
          </div>
        )
      }

      {
        payment.payment_receipt && (
          <a
            href={payment.payment_receipt}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline hover:text-blue-800 self-start dark:text-blue-500"
          >
            مشاهده رسید
          </a>
        )
      }
    </div>
  )
}

export default PaymentItem