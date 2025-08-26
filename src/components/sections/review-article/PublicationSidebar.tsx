"use client"
import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Eye } from "lucide-react"
import { useRouter } from "next/navigation"
import { IArticle } from "@/types/globa_types"
import { convertToShamsi } from "@/utility/convertToShamsi"
import { Button } from "@/components/shadcn/Button"

type IProps = IArticle

const PublicationSidebar = (props: IProps) => {
  const router = useRouter()

  const {
    id,
    status,
    status_display,
    created_at,
    published_at,
    article_link,
    wordpress_site_name
  } = props

  const createdAtShamsi = convertToShamsi(created_at)
  const publishedAtShamsi = convertToShamsi(published_at ? published_at : "")

  return (
    <aside
      className="w-full lg:!w-4/12 flex flex-col items-start justify-start p-3
        border rounded-xl lg:sticky lg:top-17 gap-3"
    >

      {/* ARTICLE ID */}
      <div className="flex gap-2 justify-between w-full items-center">
        <span className="text-sm font-bold" >آیدی مقاله:</span>

        <span className="bg-slate-100 py-2 px-3 rounded-[5px] dark:bg-zinc-800">{id}</span>
      </div>

      <hr className="bg-slate-300 w-full dark:bg-zinc-800" />

      {/* STATUS  */}
      <div className="flex gap-2 justify-between w-full items-center">
        <span className="text-sm font-bold" >وضعیت:</span>

        <span
          className={
            `
        py-2 px-3 rounded-[5px] text-sm
        ${status === "draft" && "bg-orange-300/25 text-orange-600 dark:text-orange-300"}
        ${status === "rejected" && "bg-red-300/25 text-red-600 dark:text-red-300"}
        ${status === "published" && "bg-green-300/25 text-green-600 dark:text-green-300"}
          `
          }
        >{status_display}
        </span>
      </div>

      <hr className="bg-slate-300 w-full dark:bg-zinc-800" />


      {/* SITE NAME */}
      <div className="flex gap-2 justify-between w-full items-center">
        <span className="text-sm font-bold" >وبسایت وردپرس:</span>

        <Link
          href="/panel/my-sites"
          className="text-sm hover:text-blue-500"
        >{wordpress_site_name}
        </Link>
      </div>

      <hr className="bg-slate-300 w-full dark:bg-zinc-800" />

      {/* CREATED AT */}
      <div className="flex gap-2 justify-between w-full items-center">
        <span className="text-sm font-bold" >تاریخ ایجاد مقاله:</span>

        <span
          className="text-sm"
        >{createdAtShamsi.date}
        </span>
      </div>

      <hr className="bg-slate-300 w-full dark:bg-zinc-800" />

      {/* PUBLISHED AT */}
      {
        published_at && (
          <>
            <div className="flex gap-2 justify-between w-full items-center">
              <span className="text-sm font-bold" >تاریخ انتشار:</span>

              <span
                className="text-sm"
              >{publishedAtShamsi.date}
              </span>
            </div>

            <hr className="bg-slate-300 w-full dark:bg-zinc-800" />
          </>
        )
      }


      <div className="flex items-center gap-2 justify-between w-full flex-wrap">
        {
          article_link
            ? (
              <Button
                className="text-xs bg-slate-200 text-slate-600
                hover:text-slate-50 dark:bg-zinc-600
                dark:text-slate-200 dark:hover:bg-zinc-700"
                asChild
              >
                <Link href={article_link} target="_blank">
                  <Eye />
                  مشاهده مقاله
                </Link>
              </Button>
            )
            : (
              <Button
                className="text-xs bg-red-100 text-red-600
                hover:text-slate-50 dark:bg-red-400/30
                dark:text-red-200 dark:hover:bg-red-500 dark:hover:text-white"
                onClick={() => router.back()}
              >
                <ArrowRight />
                بازگشت
              </Button>
            )
        }

        <Button
          className="text-xs bg-blue-500 
          dark:text-white dark:hover:bg-blue-600"
        >
          تایید و انتشار در سایت
          <ArrowLeft />
        </Button>
      </div>
      
    </aside>
  )
}

export default PublicationSidebar