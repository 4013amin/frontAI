"use client"

import React from "react"
import Image from "next/image"
import { IArticle } from "@/types/globa_types"

type ReviewArticleSectionProps = {
  article: IArticle
}

const ReviewArticleSection = ({ article }: ReviewArticleSectionProps) => {
  if (!article) {
    return <div>در حال بارگذاری...</div>
  }

  // تصویر را از فیلدهای موجود بگیر
  const imageUrl = 
    article.featured_image_url || 
    article.image_url || 
    article.manual_image_url || 
    article.temp_image

  return (
    <article className="article w-full lg:!w-8/12 flex flex-col items-start justify-start p-3 border rounded-xl space-y-4">
      {/* نمایش تصویر */}
      {imageUrl && (
        <div className="w-full">
          <Image
            src={imageUrl}
            alt={article.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}

      {/* عنوان */}
      <h1 className="text-2xl font-bold">{article.title}</h1>

      {/* محتوا */}
      <div
        className="text-sm text-gray-700 leading-relaxed w-full"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  )
}

export default ReviewArticleSection