"use client"
import React from "react"
import Link from "next/link"
import { ArrowLeft, Stars } from "lucide-react"
import DashboardHero from "./DashboardHero"
import useGetDashboard from "./hooks/useGetDashboard" // مسیرت رو درست وارد کن
import DashboardGrid from "./dashboard-grid/DashboardGrid"
import { Button } from "@/components/shadcn/Button"
import { Badge } from "@/components/shadcn/Badge"
import { convertToShamsi } from "@/utility/convertToShamsi"

const DashboardWrapper: React.FC = () => {
  const {
    dashboardData,
    isLoading,
    isError
  } = useGetDashboard()

  console.log(dashboardData)

  return (
    <div className="">
      {/* بک‌گراند */}
      <div
        className="w-full h-[500px] bg-[url('/images/dashboard-hero-bg.svg')] bg-cover bg-center absolute top-0 right-0"
      >
      </div>

      {/* وضعیت‌ها */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] mb-10">
        {isLoading && <p>درحال بارگذاری...</p>}

        {isError && <p className="text-red-500">بارگذاری انجام نشد</p>}

        {
          !isLoading && !isError && dashboardData && (
            <>
              <DashboardHero fullName={dashboardData.profile.full_name} />

              <DashboardGrid
                profile={dashboardData.profile}
                quota={dashboardData.quota}
                stats={dashboardData.stats}
              />

              <div className="w-full flex flex-col mt-4 lg:!flex-row items-start justify-center gap-5 mt-3">
                <div className="border rounded-lg p-4 w-full lg:!w-7/12 dark:bg-zinc-900">

                  {/* Section Header */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] lg:!text-[17px] font-bold">آخرین مقالات منتشر شده</h4>

                    <Link 
                      href="/panel/articles"
                      className="flex items-center justify-content-end gap-2 text-sm text-blue-500
                      hover:text-blue-600 group transition-all duration-150 ease-in"
                    >
                      مشاهده همه
                      <ArrowLeft
                        size={18} 
                        className="transition-transform duration-150 ease-in-out group-hover:translate-x-1"
                      />
                    </Link>

                  </div>

                  <hr className="h-1 w-full my-5" />

                  {/* Section content */}
                  <ul>
                    {
                      !dashboardData.latest_published_articles
                        ? (
                          <div className="flex gap-4 items-center justify-center flex-col">
                            <h2>مقاله‌ای منتشر نکرده‌اید</h2>

                            <Button
                              className="group text-xs border border-blue-400 bg-blue-300/30 
                              text-blue-500 transition-all hover:bg-bluse-300 dark:text-blue-500
                             duration-150 dark:bg-blue-600/15 dark:border-blue-500/29"
                            >
                              <Link href="/panel/articles/create">
                                ایجاد اولین مقاله 
                                <Stars className="group-hover:rotate-[34deg] transition-all duration-300" />
                              </Link>
                            </Button>
                          </div>
                        )
                        : (
                          <div>
                            {
                              dashboardData.latest_published_articles.map(article => (
                                <div 
                                  key={article.id} 
                                  className="flex justify-between gap-3 my-3 
                                  flex-col md:!flex-row w-full"
                                >
                                  <Link 
                                    href={article.article_link} 
                                    target="_blank" 
                                    rel="nofollow"
                                    className="truncate max-w-full md:max-w-[calc(100%-80px)] 
                                    text-sm hover:text-blue-500 font-bold text-zinc-800 dark:text-zinc-100
                                    dark:hover:text-blue-500"
                                    title={article.title}
                                  >
                                    {article.title}
                                  </Link>

                                  <Badge
                                    className="bg-zinc-100 text-zinc-600 pt-[6px] mr-auto
                                  dark:bg-zinc-700 dark:text-zinc-200"
                                  >
                                    {article.published_at && convertToShamsi(article.published_at).date}
                                  </Badge>

                                  <hr className="my-3 md:!hidden" />
                                </div>
                              ))
                            }
                          </div>

                        )
                    }
                  </ul>
                </div>
                

                <div className="border rounded-lg p-4 w-full lg:!w-5/12">tickets</div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default DashboardWrapper