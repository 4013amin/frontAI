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
  status: "published" | "rejected" | "draft" | string
  status_display: string
  article_link: string
  created_at: string
  published_at: string | null
  wordpress_site: number
  wordpress_site_name: string
  featured_image_url?: string | null
}

export interface IDashboard {
  profile: {
    username: string
    full_name: string | null
    phone: string
    subscription_active: boolean
    subscription_end_date: string // YYYY-MM-DD
    jalali_subscription_date: string // مثلا "1404/06/10"
    jalali_registration_date: string // مثلا "1404/06/03"
    active_plan: IPlan | null
  }
  quota: {
    daily_limit: number
    articles_used_today: number
    remaining_today: number
  }
  stats: {
    total_sites: number
    total_articles: number
    published_articles: number
  }
  latest_published_articles: IArticle[]
  latest_tickets: Array<any>
}