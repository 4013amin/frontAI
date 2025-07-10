"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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

  return (
    <Link 
    href={href} 
    className={clsx(`
    w-full flex-start rounded-md hover:bg-slate-200 py-3 px-2 gap-4
    font-medium text-[15px] dark:hover:bg-zinc-700
    `,className, isActive && activeClass)}>
      {children}
    </Link>
  );
}
