import { Eye, Pencil, Trash2 } from "lucide-react"
import React from "react"
import { Badge } from "@/components/shadcn/Badge"
import { Button } from "@/components/shadcn/Button"
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
  const getStatusColor = (status: string): "secondary" | "destructive" | "default" => {
    switch (status) {
      case "published":
        return "secondary" // سبز در تم پیش‌فرض

      case "rejected":
        return "destructive" // قرمز

      default:
        return "default" // خاکستری
    }
  }

  const shouldShowViewButton = article.status === "published" && onView
  
  const renderViewButton = () => shouldShowViewButton 
    ? (
      <Button
        variant="outline"
        size="sm"
        onClick={() => onView(article)}
      >
        <Eye className="w-4 h-4" />
      </Button>
    )
    : null

  const renderEditButton = () => onEdit 
    ? (
      <Button
        variant="outline"
        size="sm"
        onClick={() => onEdit(article)}
      >
        <Pencil className="w-4 h-4" />
      </Button>
    )
    : null

  const renderDeleteButton = () => onDelete 
    ? (
      <Button
        variant="destructive"
        size="sm"
        onClick={() => onDelete(article)}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    )
    : null

  const renderMobileActions = () => (
    <div className="flex sm:hidden items-center gap-2 mt-4">
      {
        shouldShowViewButton && (
          <Button variant="outline" size="sm" onClick={() => onView?.(article)}>
            <Eye className="w-4 h-4" />
          </Button>
        )
      }

      {
        onEdit && (
          <Button variant="outline" size="sm" onClick={() => onEdit(article)}>
            <Pencil className="w-4 h-4" />
          </Button>
        )
      }

      {
        onDelete && (
          <Button variant="destructive" size="sm" onClick={() => onDelete(article)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        )
      }
    </div>
  )

  return (
    <div className="block">
      {/* Desktop View */}
      <div
        className="hidden md:!grid grid-cols-[2fr_1fr_1fr_120px] 
      gap-4 p-4 items-center border-b hover:bg-gray-50 dark:hover:bg-muted/50"
      >
        <div className="truncate">{article.title}</div>

        <div>
          <Badge variant={getStatusColor(article.status)}>
            {article.status_display}
          </Badge>
        </div>

        <div className="text-sm text-muted-foreground">
          {
            article.published_at ? 
              convertToShamsi(article.published_at).date :
              convertToShamsi(article.created_at).date
          }
        </div>

        <div className="flex items-center justify-end gap-2">
          {renderViewButton()}

          {renderEditButton()}

          {renderDeleteButton()}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden p-4 border-b space-y-3">
        <div className="font-medium">{article.title}</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant={getStatusColor(article.status)}>
              {article.status_display}
            </Badge>

            <span className="text-sm text-muted-foreground">
              {
                article.published_at ? 
                  convertToShamsi(article.published_at).date :
                  convertToShamsi(article.created_at).date
              }
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          {
            shouldShowViewButton && (
              <Button variant="outline" size="sm" onClick={() => onView?.(article)}>
                <Eye className="w-4 h-4" />
              </Button>
            )
          }

          {
            onEdit && (
              <Button variant="outline" size="sm" onClick={() => onEdit(article)}>
                <Pencil className="w-4 h-4" />
              </Button>
            )
          }

          {
            onDelete && (
              <Button variant="destructive" size="sm" onClick={() => onDelete(article)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ArticleItem