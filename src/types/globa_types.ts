export type IPlan =   {
  id: number
  title: string
  duration_months: number
  price: number
  is_active: boolean
  is_trial: boolean
  features: string | []
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