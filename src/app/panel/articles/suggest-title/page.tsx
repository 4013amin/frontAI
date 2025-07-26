import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Image from "next/image"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CreateTitleMain from "@/components/sections/create-title/CreateTitleMain"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "پیشنهاد عنوان", isCurrent: true }
]

export default async function Page() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value

  if (!token) {
    redirect("/auth/login")
  }

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

      <div className="flex-center w-full">
        <Image
          src="/images/chara-robo/select-title.webp"
          width={500}
          height={500}
          alt="تولید کننده هوشمند عنوان"
          className="w-36 mb-3"
        />
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 mb-16 max-w-3xl mx-auto">
        <CreateTitleMain />
      </div>
    </div>
  )
}