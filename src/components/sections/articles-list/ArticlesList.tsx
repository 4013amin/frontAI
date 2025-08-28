import React from "react"
import ArticleItem from "./ArticleItem"
import ArticleListHeader from "./ArticleListHeader"
import { IArticle } from "@/types/globa_types"

type IProps = {
  articles: IArticle[]
}


const ArticlesList = ({ articles }: IProps) => {
  const handleViewArticle = () => {
    console.log("handleViewArticle")
  }

  const handleEditArticle = () => {
    console.log("handleEditArticle")
  }

  const handleDeleteArticle = () => {
    console.log("handleDeleteArticle")
  }

  console.log(articles)


  return (
    <div className="rounded-lg border">
      <ArticleListHeader />

      {
        articles.map(article => (
          <ArticleItem
            key={article.id}
            article={article}
            onView={handleViewArticle}
            onEdit={handleEditArticle}
            onDelete={handleDeleteArticle}
          />
        ))
      }
    </div>
  )
}

export default ArticlesList