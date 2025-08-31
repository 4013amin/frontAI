import React from "react"
import Link from "next/link"
import { Badge } from "@/components/shadcn/Badge"
import { convertToShamsi } from "@/utility/convertToShamsi"
import { IArticle } from "@/types/globa_types"


type IProps = {
  article: IArticle
}


const DashboardArticlesItem = ({ article }: IProps) => {
  return (
    <div 
      key={article.id} 
      className="flex justify-between gap-3 my-3 
                                  flex-col md:!flex-row w-full"
    >
      <Link 
        href={article.article_link} 
        target="_blank" 
        rel="nofollow"
        className="truncate max-w-full md:max-w-[calc(100%-80px)] 
                                    text-sm hover:text-blue-500 font-bold text-zinc-800 dark:text-zinc-100
                                    dark:hover:text-blue-500"
        title={article.title}
      >
        {article.title}
      </Link>

      <Badge
        className="bg-zinc-100 text-zinc-600 pt-[6px] mr-auto
                                  dark:bg-zinc-700 dark:text-zinc-200"
      >
        {article.published_at && convertToShamsi(article.published_at).date}
      </Badge>

      <hr className="my-3 md:!hidden" />
    </div>
  )
}

export default DashboardArticlesItem