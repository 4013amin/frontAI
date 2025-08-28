"use client"
import React from "react"
import { Stars } from "lucide-react"
import Link from "next/link"
import ArticlesListSkeleton from "./ArticlesListSkeleton"
import ArticlesList from "./ArticlesList"
import useGetArticles from "@/hooks/useGetArticles"
import NotLoadErorr from "@/components/ui/NotLoadErorr"

const ArticlesWrapper = () => {
  const {
    isLoading,
    isError,
    articles
  } = useGetArticles()


  return (
    <div>
        
      {
        isLoading
          ? (
            <ArticlesListSkeleton />
          )
          : isError
            ? (
              <NotLoadErorr />
            )
            : (
              articles?.length
                ? (
                  <ArticlesList articles={articles} />
                )
                : (
                  <div className="my-12 flex-center flex-col gap-2">
                    <Stars size={32} />

                    <h2 className="font-bold text-lg mt-3">لیست مقالات های شما خالی است</h2>

                    <span
                      className="text-sm text-zinc-600 
                      dark:text-zinc-400"
                    >
                      اولین مقاله خود را با هوش مصنوعی بسازید
                    </span>

                    <Link 
                      href="/panel/articles/create"
                      className="bg-blue-500 text-white py-2 px-3 rounded-lg text-sm mt-3"
                    >
                      ایجاد مقاله جدید
                    </Link>
                  </div>
                )
            )
      }
    </div>
  )
}

export default ArticlesWrapper