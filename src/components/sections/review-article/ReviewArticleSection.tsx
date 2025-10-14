"use client"

import React from "react"
import { IArticle } from "@/types/globa_types"

type ReviewArticleSectionProps = {
  article: IArticle
}

const ReviewArticleSection = ({ article }: ReviewArticleSectionProps) => {
  if (!article) {
    return <div>در حال بارگذاری...</div>
  }

  return (
    <section className="w-full lg:w-3/4 rounded-lg border bg-white p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">{article.title}</h2>
      <div
        className="text-sm text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </section>
  )
}

export default ReviewArticleSection