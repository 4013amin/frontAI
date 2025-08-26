import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { IArticle } from "@/types/globa_types"
import { DataTable } from "@/components/ui/DataTable"

type IProps = {
  articles: IArticle[]
}

type User = {
  id: string
  name: string
  email: string
}

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span>{row.getValue("name")}</span>
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span>{row.getValue("email")}</span>
  }
]


const data: User[] = [
  {
    id: "1", name: "Alireza", email: "alireza@example.com" 
  },
  {
    id: "2", name: "Sara", email: "sara@example.com" 
  },
  {
    id: "3", name: "Ali", email: "ali@example.com" 
  }
]


const ArticlesList = ({ articles }: IProps) => {
  return (
    <div className="rtl" dir="rtl">
      <DataTable data={data} columns={columns} />
    </div>
  )
}

export default ArticlesList