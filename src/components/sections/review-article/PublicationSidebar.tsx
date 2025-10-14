"use client"

import { useState } from "react"
import usePublishArticle from "./hooks/usePublishArticle"

const PublicationSidebar = ({ article }) => {
  const { publishArticle, isPending } = usePublishArticle()

  if (!article) return null

  return (
    <div className="w-full lg:w-1/4 rounded-lg border bg-white p-6 shadow-md sticky top-5">
      <h2 className="text-lg font-semibold mb-4">تنظیمات انتشار</h2>
      <div className="mb-4 text-sm">
        <p><strong>وضعیت:</strong> {article.status_display}</p>
        <p><strong>سایت:</strong> {article.wordpress_site_name}</p>
      </div>
      <button
        onClick={() => publishArticle(article.id)}
        disabled={isPending}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        {isPending ? "در حال انتشار..." : "انتشار در سایت"}
      </button>
    </div>
  )
}

export default PublicationSidebar