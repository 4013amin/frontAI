import React from "react"
import { IArticle } from "@/types/globa_types"

type ArticleItemProps = IArticle

const ArticleItem = (article: ArticleItemProps) => {
  return (
    <div>
      <p>{article.title}</p>

      <span>{article.status_display}</span>
    </div>
  )
}

export default ArticleItem