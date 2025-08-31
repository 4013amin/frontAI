import React from "react"
import DashboardCard from "./DashboardCard"

type Props = {
  publishedArticles: number
}

const ArticlesCard: React.FC<Props> = ({ publishedArticles }) => {
  return (
    <DashboardCard
      title="مقالات منتشر شده"
      value={publishedArticles == 0 ? "مقاله‌ای منتشر نکرده اید" : publishedArticles}
      image="/images/article-icon.webp"
      link="/panel/articles"
      linkText="مدیریت مقالات"
    />
  )
}

export default ArticlesCard