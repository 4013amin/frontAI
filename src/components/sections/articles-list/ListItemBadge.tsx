import React from "react"
import { Badge } from "@/components/shadcn/Badge"
import { IArticle } from "@/types/globa_types"

interface IProps {
  article: IArticle
}


const ListItemBadge = ({ article }: IProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500 dark:text-white dark:bg-green-500/50"

      case "rejected":
        return "bg-red-500 dark:text-white dark:bg-red-500/50"

      default:
        return "bg-gray-100 text-zinc-500 dark:bg-zinc-800 dark:!text-zinc-500"
    }
  }

  return (
    <Badge className={getStatusColor(article.status)}>
      {article.status_display}
    </Badge>
  )
}

export default ListItemBadge