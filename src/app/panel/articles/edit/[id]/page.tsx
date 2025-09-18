"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"
import { CircleAlert } from "lucide-react"
import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import useGetArticle from "@/hooks/useGetArticle"
import { Button } from "@/components/shadcn/Button"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ویرایش مقاله", isCurrent: true }
]

const Page = () => {
  const { id } = useParams<{ id: string }>()
  const articleId = Number(id)

  const {
    article,
    isLoading,
    isError
  } = useGetArticle(articleId)

  useEffect(() => {
    if (!isLoading && (isError || (article && article.id !== articleId))) {
      toast.error("مقاله پیدا نشد")
    }
  }, [article, isError, isLoading, articleId])

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <div className="w-full flex gap-5 flex-col lg:!flex-row items-start mt-5">
        {isLoading && <div>در حال بارگذاری...</div>}

        {
          !isLoading && !article && (
            <div
              className="text-red-600 font-medium w-full flex items-center justify-center
            flex-col gap-2 mt-10"
            >
              <CircleAlert size={36} />

              <span>مقاله‌ای با این شناسه پیدا نشد.</span>

              <Link href="/panel/articles" className="mt-5">
                <Button className="bg-blue-500 text-white">بازگشت به لیست مقالات</Button>
              </Link>
            </div>
          )
        }

        {
          article && (
            <>
              <h1 className="text-2xl font-bold">{article.title}</h1>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Page