import React from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import ListItemButton from "./ListItemButton"
import { IArticle } from "@/types/globa_types"

interface IProps {
  article: IArticle
  onEdit?: (article: IArticle) => void
  onDelete?: (article: IArticle) => void
  onView?: (article: IArticle) => void
}

const ListItemActions = ({
  article,
  onEdit,
  onDelete,
  onView
}: IProps) => {
  const shouldShowViewButton = article.status === "published" && onView

  const renderViewButton = () => shouldShowViewButton
    ? (
      <ListItemButton
        article={article}
        onClickFn={onView}
        tooltip="مشاهده مقاله"
      >
        <Eye className="w-4 h-4" />
      </ListItemButton>
    )
    : null

  const renderEditButton = () => onEdit 
    ? (
      <ListItemButton
        article={article}
        onClickFn={onEdit}
        tooltip="ویرایش مقاله"
      >
        <Pencil className="w-4 h-4" />
      </ListItemButton>
    )
    : null

  const renderDeleteButton = () => onDelete 
    ? (
      <ListItemButton
        article={article}
        onClickFn={onDelete}
        tooltip="حذف مقاله"
        variant="destructive"
      >
        <Trash2 className="w-4 h-4" />
      </ListItemButton>
    )
    : null


  return (
    <div className="flex items-center gap-2 justify-end">
      {renderViewButton()}

      {renderEditButton()}

      {renderDeleteButton()}
    </div>
  )
}


export default ListItemActions