export type IThemes = "light" | "dark"

export type INavLink = {
  id: number
  name: string
  href: string
  icon: React.ReactNode
}

export type IPhoneNumber = {
  phone: string
}

export type IOtpCode = {
  code: string
  phone: string
}

export type IFullName = {
  full_name: string
}

export type IBreadcrumbItem = {
  title: string
  link?: string
  isCurrent?: boolean
}

export type IPlanId = number


export type IArticleTitle = string

export type ArticleLanguage = "fa" | "en" | "custom" | "auto"