"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleSidebar } from "@/store/features/sidebarSlice";

type IProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
  exact?: boolean;
};

export default function NavLink({
  href,
  children,
  className,
  activeClass = "text-blue-600 dark:text-blue-400",
  exact = true,
}: IProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const isMobile = useSelector((state: RootState) => state.sidebar.isMobile);
  const dispatch = useDispatch();

  return (
    <Link
      href={href}
      onClick={() => {
        if (isMobile) {
          dispatch(toggleSidebar());
        }
      }}
      className={clsx(
        `
    w-full flex-start rounded-md hover:bg-slate-200 py-3 px-2 gap-4
    font-medium text-[15px] dark:hover:bg-zinc-700
    `,
        className,
        isActive && activeClass
      )}
    >
      {children}
    </Link>
  );
}
