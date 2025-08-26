import React from "react"
import { IArticle } from "@/types/globa_types"
import "@/styles/article.css"
import Image from "next/image"

type IProps = IArticle

const ReviewArticleSection = (props: IProps) => {
  const {
    title,
    content,
    featured_image_url
  } = props

  return (
    <article
      className="article w-full lg:!w-8/12 flex flex-col items-start justify-start p-3
          border rounded-xl"
    >

      {
        featured_image_url && (
          <Image 
            src={featured_image_url}
            height={600}
            alt={title}
            width={1200}
          />
        )
      }

      <h1 className="font-bold text-[24px] lg:text-[28px] my-3 border-r-4 border-blue-600 pr-4">{title}</h1>

      <div
        className="prose prose-lg w-full rtl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default ReviewArticleSection