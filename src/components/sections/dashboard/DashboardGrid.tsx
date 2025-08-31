// components/DashboardGrid.tsx
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import DailyProgress from "./DailyProgress"

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-4 w-full mt-10">

      {/* sub card*/}
      <div
        className="bg-white p-3 rounded-lg border 
      hover:[box-shadow:0px_4px_10px_rgba(0,0,0,0.1)] 
      dark:bg-zinc-900 dark:border-zinc-700"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">اشتراک من</span>

            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">رایگان</p>

            <span className="text-gray-600 text-xs dark:text-gray-400">اعتبار تا: 1404/06/10</span>
          </div>

          <div className="w-[50px]">
            <Image width={70} height={70} alt="subs image" src="/images/subs.webp" className="w-full" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link
            href="/panel/subscription"
            className="bg-slate-100 text-gray-800 px-4 py-2 rounded-lg w-full flex
             items-center gap-2 justify-center text-sm hover:!bg-slate-200 transition-all
              duration-150 ease-in dark:bg-zinc-700 dark:text-zinc-100 dark:hover:!bg-zinc-600"
          >
            مشاهده پلن ها
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>

      {/* qute card*/}
      <div
        className="bg-white p-3 rounded-lg border 
      hover:[box-shadow:0px_4px_10px_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:border-zinc-700"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">سهمیه تولید مقاله امروز</span>

            <DailyProgress daily_limit={10} articles_used_today={3} />
          </div>

          <div className="w-[50px]">
            <Image width={70} height={70} alt="add article image" src="/images/add-article.webp" className="w-full" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link
            href="/panel/articles/create"
            className="bg-slate-100 text-gray-800 px-4 py-2 rounded-lg w-full flex 
            items-center gap-2 justify-center text-sm hover:!bg-slate-200 transition-all 
            duration-150 ease-in dark:bg-zinc-700 dark:text-zinc-100 dark:hover:!bg-zinc-600"
          >
            ایجاد مقاله جدید
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>

      {/* sites card*/}
      <div
        className="bg-white p-3 rounded-lg border 
      hover:[box-shadow:0px_4px_10px_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:border-zinc-700"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">سایت های من</span>

            <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">0</span>
          </div>

          <div className="w-[50px]">
            <Image width={70} height={70} alt="wordpress image" src="/images/wordpress.webp" className="w-full" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link
            href="/panel/my-sites"
            className="bg-slate-100 text-gray-800 px-4 py-2 rounded-lg w-full flex 
            items-center gap-2 justify-center text-sm hover:!bg-slate-200 transition-all
             duration-150 ease-in dark:bg-zinc-700 dark:text-zinc-100 dark:hover:!bg-zinc-600"
          >
            مدیریت سایت‌ها
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>

      {/* articles card*/}
      <div
        className="bg-white p-3 rounded-lg border 
      hover:[box-shadow:0px_4px_10px_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:border-zinc-700"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">مقالات منتشر شده</span>

            <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">30</span>
          </div>

          <div className="w-[50px]">
            <Image width={70} height={70} alt="article icon" src="/images/article-icon.webp" className="w-full" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link
            href="/panel/articles"
            className="bg-slate-100 text-gray-800 px-4 py-2 rounded-lg w-full flex 
            items-center gap-2 justify-center text-sm hover:!bg-slate-200 transition-all
             duration-150 ease-in dark:bg-zinc-700 dark:text-zinc-100 dark:hover:!bg-zinc-600"
          >
            مدیریت مقالات
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default DashboardGrid