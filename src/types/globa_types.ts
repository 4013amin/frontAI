export type IPlan =   {
  id: number
  title: string
  duration_months: number
  price: number
  is_active: boolean
  is_trial: boolean
  features: string | []
}