interface IProps {
  params: {
    id?: string
  }
}

export default function page({ params }: IProps) {
  const id = params.id

  return (
    <div>
      <h1>پرداخت با شناسه: {id}</h1>
    </div>
  )
}