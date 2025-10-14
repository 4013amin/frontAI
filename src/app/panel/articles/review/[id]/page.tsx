"use client"

import React, { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
import Breadcrumb from "@/components/ui/Breadcrumb"
import ReviewArticleSection from "@/components/sections/review-article/ReviewArticleSection"
import PublicationSidebar from "@/components/sections/review-article/PublicationSidebar"
import { IArticle } from "@/types/globa_types"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", link: "/panel/articles/create" },
  { title: "بررسی نهایی", isCurrent: true }
]

const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("auth_token="))
    ?.split("=")[1]
  return token || null
}

const Page = () => {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [article, setArticle] = useState<IArticle | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchArticleData = async () => {
      const token = getAuthToken()
      if (!token) {
        toast.error("لطفا ابتدا وارد شوید.")
        router.push("/auth/login")
        setIsLoading(false)
        return
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}articles/${id}/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })

        if (!res.ok) {
          toast.error("مقاله پیدا نشد یا شما دسترسی ندارید.")
          router.push("/panel/articles")
          setIsLoading(false)
          return
        }

        const data: IArticle = await res.json()
        setArticle(data)
      } catch (_error) {
        toast.error("خطا در برقراری ارتباط با سرور.")
        router.push("/panel/articles")
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticleData()
  }, [id, router])

  if (isLoading) {
    return (
      <div className="flex-center mt-20">
        <p>در حال بارگذاری اطلاعات مقاله...</p>
      </div>
    )
  }

  if (!article) {
    return null
  }

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full flex gap-5 flex-col lg:!flex-row items-start mt-5">
        <ReviewArticleSection article={article} />
        <PublicationSidebar article={article} />
      </div>
    </div>
  )
}

export default Page