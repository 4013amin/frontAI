export type IPlan =   {
  id: number
  title: string
  duration_months: number
  price: number
  is_active: boolean
  is_trial: boolean
  description: string
  features: string | []
  subscription_end_date: string
}

export type IProfile = {
  username: string
  full_name: string
  phone: string
  subscription_active: boolean
  subscription_end_date: string
  jalali_subscription_date: string
  jalali_registration_date: string
  active_plan: IPlan | null
}

export type ISite = {
  id?: number
  name: string
  site_url: string
  username: string
  app_password?: string
}

export type IPayment = {
  id: number
  plan: number
  plan_title: string
  user_username: string
  amount: number
  transaction_ref: string
  payment_receipt: string
  status: string
  status_display: string
  created_at: string
  admin_notes: string | null
}

export type IArticle = {
  id: number
  title: string
  content: string
  status: "draft" | "published"
  status_display: string
  article_link: string
  created_at: string
  published_at: string | null
  wordpress_site: number
  wordpress_site_name: string
}