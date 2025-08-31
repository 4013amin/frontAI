import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"

type DashboardCardProps = {
  title: string
  value?: string | number | React.ReactNode
  description?: string
  image: string
  link: string
  linkText: string
  children?: React.ReactNode
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  description,
  image,
  link,
  linkText,
  children
}) => {
  return (
    <div
      className="bg-white p-3 rounded-lg border 
      hover:[box-shadow:0px_4px_10px_rgba(0,0,0,0.1)] 
      dark:bg-zinc-900 dark:border-zinc-700 
      flex flex-col h-full"  // 🔥 کارت کل ارتفاع رو می‌گیره
    >
      {/* محتوا */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>

          {value && <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{value}</p>}

          {
            description && (
              <span className="text-gray-600 text-xs dark:text-gray-400">{description}</span>
            )
          }

          {children}
        </div>

        <div className="w-[50px]">
          <Image width={70} height={70} alt={title} src={image} className="w-full" />
        </div>
      </div>

      {/* دکمه همیشه پایین کارت */}
      <div className="mt-auto pt-4"> 
        <Link
          href={link}
          className="group bg-slate-100 text-gray-800 px-4 py-2 rounded-lg w-full flex
          items-center gap-2 justify-center text-sm hover:!bg-slate-200 transition-all
          duration-150 ease-in dark:bg-zinc-700 dark:text-zinc-100 dark:hover:!bg-zinc-600"
        >
          {linkText}

          <ArrowLeft
            size={18}
            className="transition-transform duration-150 ease-in-out group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  )
}

export default DashboardCard