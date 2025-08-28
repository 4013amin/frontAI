import React, { useState } from "react"
import dynamic from "next/dynamic"
import ArticleItem from "./ArticleItem"
import ArticleListHeader from "./ArticleListHeader"
import { IArticle } from "@/types/globa_types"

const RemoveArticleDialog = dynamic(() => import("./RemoveArticleDialog"), {
  loading: () => null,
  ssr: false
})

type IProps = {
  articles: IArticle[]
}


const ArticlesList = ({ articles }: IProps) => {
  const [selectedForRemove, setSelectedForRemove] = useState<number>(0)
  const [selectedForRemoveTitle, setSelectedForRemoveTitle] = useState<string>("")
  const [isOpenRemoveDialog, setIsOpenRemoveDialog] = useState<boolean>(false)
  
  const handleViewArticle = () => {
    console.log("handleViewArticle")
  }

  const handleEditArticle = () => {
    console.log("handleEditArticle")
  }

  const handleDeleteArticle = (article: IArticle) => {
    setSelectedForRemove(article.id)
    setSelectedForRemoveTitle(article.title)
    setIsOpenRemoveDialog(true)
    console.log(article.title)
  }


  return (
    <>
      <div className="rounded-lg border overflow-hidden mb-12">
        <ArticleListHeader />

        {
          articles.map(article => (
            <ArticleItem
              key={article.id}
              article={article}
              onView={handleViewArticle}
              onEdit={handleEditArticle}
              onDelete={handleDeleteArticle}
            />
          ))
        }
      </div>

  
      <RemoveArticleDialog
        isOpen={isOpenRemoveDialog}
        articleId={selectedForRemove}
        setIsOpen={setIsOpenRemoveDialog}
        articleTitle={selectedForRemoveTitle}
      />

    </>
  )
}

export default ArticlesList