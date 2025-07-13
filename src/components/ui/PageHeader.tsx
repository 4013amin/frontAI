import React from "react"

type IProps = {
  title: string
  children?: React.ReactNode
}

function PageHeader({ children, title }: IProps) {
  return (
    <div id="page-header" className="">
      <h1 className="font-bold text-xl">
        {title}
      </h1>

      {children}
    </div>
  )
}

export default PageHeader