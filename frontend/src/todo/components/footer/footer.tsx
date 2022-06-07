import { useRouter } from "next/router"

interface FooterProps {
  onClearCompleted: () => void
  taskCount: number
}

export const Footer = ({ onClearCompleted, taskCount }: FooterProps) => {
  const router = useRouter()

  const handleClearCompleted = () => {
    onClearCompleted()
  }

  return (
    <div>
      <div>{taskCount}</div>
      <button onClick={() => router.push("/")}>all</button>
      <button onClick={() => router.push("/active")}>active</button>
      <button onClick={() => router.push("/completed")}>completed</button>
      <button onClick={handleClearCompleted}>clear completed</button>
    </div>
  )
}
