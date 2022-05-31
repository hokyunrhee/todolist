interface TaskProps {
  id: string
  title: string
  completed: boolean
}

export const Task = ({ id, title, completed }: TaskProps) => {
  return (
    <div>
      <div>{title}</div>
      <input type="checkbox" checked={completed} />
    </div>
  )
}
