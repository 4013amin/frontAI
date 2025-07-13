import {
  BadgeCheck,
  BookMarked,
  CircleQuestionMark,
  FilePen,
  Heading1,
  Headset,
  House,
  PanelsTopLeft
} from "lucide-react"
import React, { memo } from "react"
import NavLink from "./Navlink"
import { INavLink } from "@/components/types"
import { Separator } from "@/components/shadcn/Separator"

const Links: INavLink[] = [
  {
    id: 1, name: "خانه", href: "/panel", icon: <House /> 
  },
  {
    id: 2, name: "ایجاد مقاله", href: "/panel/articles/create", icon: <FilePen /> 
  },
  {
    id: 3, name: "پیشنهاد عنوان", href: "/panel/articles/suggest-title", icon: <Heading1 /> 
  },
  {
    id: 4, name: "سایت ها", href: "/panel/my-sites", icon: <PanelsTopLeft /> 
  },
  {
    id: 5, name: "مقالات", href: "/panel/articles", icon: <BookMarked /> 
  },
  {
    id: 6, name: "اشتراک من", href: "/panel/subscription", icon: <BadgeCheck /> 
  },
  {
    id: 7, name: "پشتیبانی", href: "/panel/support", icon: <Headset /> 
  },
  {
    id: 8, name: "راهنما", href: "/panel/help", icon: <CircleQuestionMark /> 
  }
]

const Nav = () => {
  return (
    <nav className="mt-3">
      <Separator className="my-3" orientation="horizontal" />

      <ul>
        {
          Links.map(navItem => (
            <NavLink href={navItem.href} key={navItem.id}>
              {navItem.icon}

              {navItem.name}
            </NavLink>
          ))
        }
      </ul>

    </nav>
  )
}

export default memo(Nav)