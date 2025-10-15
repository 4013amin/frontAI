"use client"

import { IArticle } from "@/types/globa_types"
import usePublishArticle from "./hooks/usePublishArticle"

type PublicationSidebarProps = {
  article: IArticle
}

const PublicationSidebar = ({ article }: PublicationSidebarProps) => {
  const { publishArticle, isPending } = usePublishArticle()

  if (!article) return null

  // --- منطق جدید و صحیح برای پیدا کردن URL تصویر ---
  // اولویت با عکسی است که کاربر آپلود کرده، بعد با عکسی که AI ساخته
  const imageUrl = article.manual_image_url || article.temp_image

  return (
    <div className="w-full lg:w-1/4 rounded-lg border bg-white p-6 shadow-md sticky top-5">
      <h2 className="text-lg font-semibold mb-4">تنظیمات انتشار</h2>

      {/* این بخش حالا به درستی کار خواهد کرد */}
      {imageUrl && (
        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">تصویر شاخص</h3>
          <img
            src={imageUrl}
            alt={`پیش‌نمایش تصویر برای مقاله: ${article.title}`}
            className="w-full h-auto rounded-lg object-cover border"
          />
        </div>
      )}

      <div className="mb-4 text-sm">
        <p><strong>وضعیت:</strong> {article.status_display}</p>
        <p><strong>سایت:</strong> {article.wordpress_site_name}</p>
      </div>

      <button
        onClick={() => publishArticle(article.id)}
        disabled={isPending || !article.content}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "در حال انتشار..." : "انتشار در سایت"}
      </button>
    </div>
  )
}

export default PublicationSidebar