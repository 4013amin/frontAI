import React from "react"
import DashboardCard from "./DashboardCard"

type Props = {
  title: string
  endDate: string
}

const SubscriptionCard: React.FC<Props> = ({ title, endDate }) => {
  return (
    title
      ? (
        <DashboardCard
          title="اشتراک من"
          value={title}
          description={`اعتبار تا: ${endDate}`}
          image="/images/subs.webp"
          link="/panel/subscription"
          linkText="مشاهده پلن ها"
        />
      )
      : (
        <DashboardCard
          title="اشتراک من"
          value="اشتراک فعالی ندارید"
          description=""
          image="/images/subs.webp"
          link="/panel/subscription"
          linkText="مشاهده پلن ها"
        />
      )
  )
}

export default SubscriptionCard