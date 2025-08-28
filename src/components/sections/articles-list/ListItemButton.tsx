import React from "react"
import { IArticle } from "@/types/globa_types"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/Tooltip"
import { Button } from "@/components/shadcn/Button"

type IProps = {
  article: IArticle
  onClickFn: (article: IArticle) => void
  children: React.ReactNode
  tooltip: string
  variant?: "secondary" | "destructive" | "default" | "link" | "outline" | "ghost" | null | undefined
}

const ListItemButton = ({
  article,
  onClickFn,
  children,
  tooltip,
  variant
}: IProps) => {
  return (

    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <Button
          variant={variant || "outline"}
          size="sm"
          onClick={() => onClickFn(article)}
        >
          {children}
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        {tooltip}
      </TooltipContent>
    </Tooltip>

  )
}

export default ListItemButton