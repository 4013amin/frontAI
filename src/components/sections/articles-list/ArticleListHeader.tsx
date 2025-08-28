import React from "react"

const ArticleListHeader = () => {

  console.log("header")
  return (
    <div className="hidden md:!grid grid-cols-[2fr_1fr_1fr_120px] gap-4 bg-gray-100/50 dark:bg-muted p-4">
      <div className="font-medium">عنوان مقاله</div>

      <div className="font-medium">وضعیت</div>

      <div className="font-medium">تاریخ انتشار</div>

      <div className="font-medium text-center">عملیات</div>
    </div>
  )
}

export default ArticleListHeader