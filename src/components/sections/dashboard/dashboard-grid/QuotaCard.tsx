import React from "react"
import DashboardCard from "./DashboardCard"
import DailyProgress from "./DailyProgress"

type Props = {
  dailyLimit: number
  usedToday: number
}

const QuotaCard: React.FC<Props> = ({ dailyLimit, usedToday }) => {
  return (
    <DashboardCard
      title="سهمیه تولید مقاله امروز"
      image="/images/add-article.webp"
      link="/panel/articles/create"
      linkText="ایجاد مقاله جدید"
    >
      <DailyProgress daily_limit={dailyLimit} articles_used_today={usedToday} />
    </DashboardCard>
  )
}

export default QuotaCard