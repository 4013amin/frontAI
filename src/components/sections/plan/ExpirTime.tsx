import useSubscriptionDaysLeft from "@/hooks/useSubscriptionDaysLeft"

const ExpirTime = ({ expiryDate }: { expiryDate: number }) => {
  const daysLeft = useSubscriptionDaysLeft(expiryDate ? new Date(expiryDate).getTime() : 0)

  if (!expiryDate) return 0

  return <strong>{daysLeft}</strong>
}

export default ExpirTime