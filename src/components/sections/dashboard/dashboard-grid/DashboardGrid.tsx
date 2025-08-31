import React from "react"
import SubscriptionCard from "./SubscriptionCard"
import QuotaCard from "./QuotaCard"
import SitesCard from "./SitesCard"
import ArticlesCard from "./ArticlesCard"

type Props = {
  profile: any
  quota: any
  stats: any
}

const DashboardGrid: React.FC<Props> = ({
  profile,
  quota,
  stats
}) => {
  return (
    <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-4 w-full mt-10">
      <SubscriptionCard
        title={profile.active_plan.title}
        endDate={profile.jalali_subscription_date}
      />

      <QuotaCard
        dailyLimit={quota.daily_limit}
        usedToday={quota.articles_used_today}
      />

      <SitesCard totalSites={stats.total_sites} />

      <ArticlesCard publishedArticles={stats.published_articles} />
    </div>
  )
}

export default DashboardGrid