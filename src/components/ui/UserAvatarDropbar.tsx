import { User } from "lucide-react"
import React, { useState } from "react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/shadcn/DropdownMenu"

const MenuItems = [
  {
    id: 1,
    link: "/panel/subscription",
    title: "اشتراک من"
  },
  {
    id: 2,
    link: "/panel/logout",
    title: "خروج"
  }
]

const UserAvatarDropbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = (): void => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (): void => {
    setIsOpen(false)
  }

  return (
    <div className="">
      <DropdownMenu dir="rtl" open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger
          onClick={handleToggle}
          className={
            `border-none cursor-pointer p-2 rounded-lg
         hover:bg-slate-100 outline-0 dark:hover:bg-zinc-800 
         ${isOpen ? "bg-slate-100 dark:bg-zinc-800" : ""}`
          }
        >
          <User />
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>

          {
            MenuItems.map(item => (
              <DropdownMenuItem key={item.id} className="px-3">
                <Link
                  href={item.link} 
                  onClick={handleLinkClick}
                  className={` w-full text-[16px] ${item.link.includes("/logout") ? "text-red-500" : ""}`}
                >
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default UserAvatarDropbar