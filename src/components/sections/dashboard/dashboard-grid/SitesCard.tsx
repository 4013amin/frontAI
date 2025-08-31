import React from "react"
import DashboardCard from "./DashboardCard"

type Props = {
  totalSites: number
}

const SitesCard: React.FC<Props> = ({ totalSites }) => {
  return (
    <DashboardCard
      title="سایت‌های من"
      value={totalSites == 0 ? "هیچ سایتی ندارید" : `${totalSites} سایت`}
      image="/images/wordpress.webp"
      link="/panel/my-sites"
      linkText="مدیریت سایت‌ها"
    />
  )
}

export default SitesCard