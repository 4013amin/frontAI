"use client"
import { useParams } from "next/navigation"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "nextjs-toploader/app"
import { toast } from "sonner"
import Breadcrumb from "@/components/ui/Breadcrumb"
import { RootState } from "@/store/store"
import ReviewArticleSection from "@/components/sections/review-article/ReviewArticleSection"
import PublicationSidebar from "@/components/sections/review-article/PublicationSidebar"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", link: "/panel/articles/create" },
  { title: "برسی نهایی", isCurrent: true }
]


const Page = () => {
  const { id } = useParams<{ id: string }>()
  const article = useSelector((state: RootState) => state.article.createdArticle)
  const router = useRouter()

  useEffect(() => {
    if (!article) {
      // Handle article not found
      toast.error("مقاله پیدا نشد")
      router.push("/panel/articles")
    }
    else if(article.id !== Number.parseInt(id)) {
      toast.error("مقاله پیدا نشد")
      router.push("/panel/articles")
    }
  }, [article])


  return (
    <div className="mb-10">
      
      <Breadcrumb items={breadcrumbItems} />

      <div className="w-full flex gap-5 flex-col lg:!flex-row items-start mt-5">

        {
          article && (
            <>
              <ReviewArticleSection {...article} />

              <PublicationSidebar {...article} />
            </>
          )
        }

      </div>


    </div>
  )
}

export default Page