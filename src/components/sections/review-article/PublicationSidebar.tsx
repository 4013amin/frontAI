import React from "react"
import Link from "next/link"
import { IArticle } from "@/types/globa_types"

type IProps = IArticle

const PublicationSidebar = (props: IProps) => {
  const {
    id,
    status,
    status_display,
    article_link,
    created_at,
    published_at,
    wordpress_site_name
  } = props

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

      <hr className="bg-slate-300 w-full" />

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

      <hr className="bg-slate-300 w-full" />


      {/* SITE NAME */}
      <div className="flex gap-2 justify-between w-full items-center">
        <span className="text-sm font-bold" >وبسایت وردپرس:</span>

        <Link
          href="/panel/my-sites"
          className="text-sm hover:text-blue-500"
        >{wordpress_site_name}
        </Link>
      </div>

      <hr className="bg-slate-300 w-full" />

      {/* CREATED AT */}
      <div className="flex gap-2 justify-between w-full items-center">
        <span className="text-sm font-bold" >تاریخ ایجاد مقاله:</span>

        <span
          className="text-sm"
        >{created_at}
        </span>
      </div>

      <hr className="bg-slate-300 w-full" />

      
    </aside>
  )
}

export default PublicationSidebar