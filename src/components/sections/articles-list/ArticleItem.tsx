import React from "react"
import ListItemBadge from "./ListItemBadge"
import ListItemActions from "./ListItemActions"
import { IArticle } from "@/types/globa_types"
import { convertToShamsi } from "@/utility/convertToShamsi"

type ArticleItemProps = {
  article: IArticle
  onEdit?: (article: IArticle) => void
  onDelete?: (article: IArticle) => void
  onView?: (article: IArticle) => void
  onReview?: (article: IArticle) => void
}

const ArticleItem = ({
  article,
  onEdit,
  onDelete,
  onView,
  onReview
}: ArticleItemProps) => {

  // اگر وضعیت مقاله pending یا draft بود، آیکن چشم نمایش داده شود
  const reviewIcon = (article.status === "pending" || article.status === "draft") && onReview ? (
    <button
      title="بررسی مقاله"
      onClick={() => onReview(article)}
      className="ml-2 text-blue-600 hover:text-blue-800"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </button>
  ) : null

  return (
    <div className="block">
      {/* Desktop View */}
      <div
        className="hidden md:!grid grid-cols-[2fr_1fr_1fr_120px] 
        gap-4 p-4 items-center border-b hover:bg-gray-50 dark:hover:bg-muted/50"
      >
        <div className="truncate">{article.title}</div>

        <div>
          <ListItemBadge article={article} />
        </div>

        <div className="text-sm text-muted-foreground">
          {
            article.published_at ? 
              convertToShamsi(article.published_at).date :
              "-"
          }
        </div>

        <div className="flex items-center">
          {reviewIcon}
          <ListItemActions
            article={article}
            onEdit={onEdit}
            onDelete={onDelete}
            onView={onView}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden p-4 border-b space-y-3">
        <div className="font-medium">{article.title}</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-col">
            <ListItemBadge article={article} />

            <span className="text-xs text-muted-foreground">
              {
                article.published_at ? 
                  convertToShamsi(article.published_at).date :
                  ""
              }
            </span>
          </div>
          <div className="flex items-center">
            {reviewIcon}
            <ListItemActions
              article={article}
              onEdit={onEdit}
              onDelete={onDelete}
              onView={onView}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
