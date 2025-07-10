import { INavLink } from "@/components/types";
import {
  BadgeCheck,
  BookMarked,
  CircleQuestionMark,
  FilePen,
  Heading1,
  Headset,
  House,
  PanelsTopLeft,
} from "lucide-react";
import React from "react";
import NavLink from "./Navlink";
import { Separator } from "@/components/shadcn/Separator";


const Links: INavLink[] = [
  { id: 1, name: "خانه", href: "/", icon: <House /> },
  { id: 2, name: "ایجاد مقاله", href: "/articles/create", icon: <FilePen /> },
  {
    id: 3,
    name: "پیشنهاد عنوان",
    href: "/articles/suggest-title",
    icon: <Heading1 />,
  },
  { id: 4, name: "سایت های من", href: "/my-sites", icon: <PanelsTopLeft /> },
  { id: 5, name: "مقالات", href: "/my-articles", icon: <BookMarked /> },
  { id: 6, name: "اشتراک من", href: "/subscription", icon: <BadgeCheck /> },
  { id: 7, name: "پشتیبانی", href: "/support", icon: <Headset /> },
  { id: 8, name: "راهنما", href: "/help", icon: <CircleQuestionMark /> },
];

const Nav = () => {
  return (
    <nav className="mt-3">
      <Separator
      className="my-3"
        orientation="horizontal"
      />
      <ul>
        {Links.map((navItem) => (
          <NavLink href={navItem.href} key={navItem.id}>
            {navItem.icon}
            {navItem.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
