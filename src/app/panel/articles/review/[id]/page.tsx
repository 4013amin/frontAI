"use client"
import { useParams } from "next/navigation"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "nextjs-toploader/app"
import { toast } from "sonner"
import Breadcrumb from "@/components/ui/Breadcrumb"
import PageHeader from "@/components/ui/PageHeader"
import { RootState } from "@/store/store"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", link: "/articles/create" },
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


  console.log(article)


  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader title="ثبت فیش پرداخت" />

      {/* اینجا دیتای فچ شده رو استفاده کن */}

    </div>
  )
}

export default Page