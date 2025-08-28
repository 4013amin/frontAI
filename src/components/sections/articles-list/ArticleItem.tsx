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
}

const ArticleItem = ({
  article,
  onEdit,
  onDelete,
  onView
}: ArticleItemProps) => {


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
              convertToShamsi(article.created_at).date
          }
        </div>

        <ListItemActions
          article={article}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
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
                  convertToShamsi(article.created_at).date
              }
            </span>
          </div>

          <ListItemActions
            article={article}
            onEdit={onEdit}
            onDelete={onDelete}
            onView={onView}
          />
        </div>

      </div>
    </div>
  )
}

export default ArticleItem