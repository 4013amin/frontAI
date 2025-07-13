import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

function ShadcnBreadcrumb({
  dir = "ltr",
  ...props
}: { dir?: "ltr" | "rtl" } & React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" dir={dir} {...props} />
}

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={
        cn(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          className
        )
      }
      {...props}
    />
  )
}

function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  href,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  href?: string
}) {

  if (!asChild && href) {
    // Only pass href to Link if it exists
    return (
      <Link
        data-slot="breadcrumb-link"
        className={cn("hover:text-foreground transition-colors", className)}
        href={href}
        {...props}
      />
    )
  }

  // For asChild or no href, fallback to Slot or anchor
  const Tag = asChild ? Slot : "a"
  return (
    <Tag
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...(href ? { href } : {})}
      {...props}
    />
  )
}

export default BreadcrumbLink

function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  dir = "ltr", // اضافه کردن پراپس dir
  ...props
}: React.ComponentProps<"li"> & { dir?: "ltr" | "rtl" }) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? (dir === "rtl" ? <ChevronLeft /> : <ChevronRight />)}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />

      <span className="sr-only">More</span>
    </span>
  )
}

export {
  ShadcnBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
}