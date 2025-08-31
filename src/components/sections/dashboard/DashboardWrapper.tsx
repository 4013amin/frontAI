"use client"
import React from "react"
import DashboardHero from "./DashboardHero"
import useGetDashboard from "./hooks/useGetDashboard" // مسیرت رو درست وارد کن
import DashboardGrid from "./dashboard-grid/DashboardGrid"
import DashboardArticles from "./dashboard-articles/DashboardArticles"
import DashboardTickets from "./dashboard-tickets/DashboardTickets"

const DashboardWrapper: React.FC = () => {
  const {
    dashboardData,
    isLoading,
    isError
  } = useGetDashboard()


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
                <DashboardArticles articles={dashboardData.latest_published_articles} />

                <DashboardTickets tickets={dashboardData.latest_tickets} />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default DashboardWrapper