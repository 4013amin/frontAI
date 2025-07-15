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
  id: number
  name: string
  site_url: string
  username: string
}