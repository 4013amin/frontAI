import React from "react"
import { IBreadcrumbItem } from "../types"
import {
  ShadcnBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/shadcn/ShadcnBreadcrumb"

type IProps = {
  items: IBreadcrumbItem[]
}

const Breadcrumb = ({ items }: IProps) => {
  const defaultItem = { title: "داشبورد", link: "/panel" }
  return (
    <ShadcnBreadcrumb dir="rtl" className="my-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={defaultItem.link}>{defaultItem.title}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator dir="rtl" />

        {
          items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {
                  item.isCurrent
                    ? (
                      <BreadcrumbPage>{item.title}</BreadcrumbPage>
                    )
                    : (
                      <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
                    )
                }
              </BreadcrumbItem>

              {index < items.length - 1 && <BreadcrumbSeparator dir="rtl" />}
            </React.Fragment>
          ))
        }
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  )
}

export default Breadcrumb