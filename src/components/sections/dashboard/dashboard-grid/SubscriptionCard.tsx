import React from "react"
import DashboardCard from "./DashboardCard"

type Props = {
  title: string
  endDate: string
}

const SubscriptionCard: React.FC<Props> = ({ title, endDate }) => {
  return (
    <DashboardCard
      title="اشتراک من"
      value={title}
      description={`اعتبار تا: ${endDate}`}
      image="/images/subs.webp"
      link="/panel/subscription"
      linkText="مشاهده پلن ها"
    />
  )
}

export default SubscriptionCard