"use client" // این کامپوننت تعاملی است پس این خط لازم است

// ما دیگر نیازی به useSelector یا Redux نداریم

// کامپوننت، اطلاعات مقاله را به عنوان یک ورودی به نام "article" دریافت می‌کند
const ReviewArticleSection = ({ article }) => {

  if (!article) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className="w-full lg:w-3/4 rounded-lg border bg-white p-6 shadow-md">
      {/* نمایش عنوان مقاله */}
      <h1 className="mb-4 text-3xl font-bold">{article.title}</h1>

      {/* نمایش محتوای مقاله */}
      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  )
}

export default ReviewArticleSection