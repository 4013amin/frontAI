import React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import CreateArticleMain from "@/components/sections/create-article/CreateArticleMain"
import Breadcrumb from "@/components/ui/Breadcrumb"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "ایجاد مقاله جدید", isCurrent: true }
]

async function Page() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sites/`, {
    headers: {
      Authorization: `Token ${token}`,
      Accept: "application/json"
    },
    cache: "no-store"
  })
  
  if (!res.ok) {
    redirect("/auth/login")
  }
  
  const data = await res.json()
  const hasSite = Array.isArray(data) && data.length > 0
  
  if (!hasSite) {
    redirect("/panel/my-sites?message=no-site")
  }

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <CreateArticleMain />
    </div>
  )
}

export default Page