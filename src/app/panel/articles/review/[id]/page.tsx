"use client" // <<-- مهم: این خط مشخص می‌کند که کد در مرورگر کاربر اجرا شود

import React, { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
import Breadcrumb from "@/components/ui/Breadcrumb"
import ReviewArticleSection from "@/components/sections/review-article/ReviewArticleSection"
import PublicationSidebar from "@/components/sections/review-article/PublicationSidebar"
import { IArticle } from "@/types/globa_types" // مطمئن شوید این ایمپورت درست است

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", link: "/panel/articles/create" },
  { title: "بررسی نهایی", isCurrent: true }
]

// یک تابع کمکی برای خواندن توکن از کوکی‌های مرورگر
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

  // از State برای نگهداری اطلاعات مقاله و وضعیت لودینگ استفاده می‌کنیم
  const [article, setArticle] = useState<IArticle | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // از useEffect استفاده می‌کنیم تا به محض باز شدن صفحه، اطلاعات مقاله را بگیریم
  useEffect(() => {
    // اگر id هنوز در URL مشخص نبود، کاری نکن
    if (!id) return

    const fetchArticleData = async () => {
      const token = getAuthToken()

      // اگر کاربر توکن نداشت، او را به صفحه لاگین بفرست
      if (!token) {
        toast.error("لطفا ابتدا وارد شوید.")
        router.push("/auth/login")
        return
      }

      try {
        // درخواست به API برای گرفتن اطلاعات مقاله با شناسه مشخص
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}articles/${id}/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })

        // اگر مقاله پیدا نشد یا خطایی رخ داد
        if (!res.ok) {
          toast.error("مقاله پیدا نشد یا شما دسترسی ندارید.")
          router.push("/panel/articles")
          return
        }

        const data: IArticle = await res.json()
        setArticle(data) // اطلاعات گرفته شده را در state ذخیره کن
      } catch (error) {
        toast.error("خطا در برقراری ارتباط با سرور.")
        router.push("/panel/articles")
      } finally {
        setIsLoading(false) // لودینگ را تمام کن
      }
    }

    fetchArticleData()
  }, [id, router]) // این افکت فقط زمانی اجرا می‌شود که id تغییر کند

  // اگر در حال لودینگ بود، یک پیام نمایش بده
  if (isLoading) {
    return (
      <div className="flex-center mt-20">
        <p>در حال بارگذاری اطلاعات مقاله...</p>
      </div>
    )
  }

  // اگر بعد از لودینگ، مقاله‌ای وجود نداشت (مثلا به خاطر خطا)
  if (!article) {
    // کاربر قبلا به صفحه مقالات هدایت شده، اما این یک لایه امنیتی اضافه است
    return null
  }

  // اگر همه چیز موفق بود، صفحه را نمایش بده
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