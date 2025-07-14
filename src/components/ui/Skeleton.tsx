type SkeletonProps = {
  className?: string
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={`skeleton ${className}`}></div>
  )
}

export default Skeleton