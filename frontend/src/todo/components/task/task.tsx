interface TaskProps {
  id: string
  title: string
  completed: boolean
  onCheck: (id: string) => void
  onDelete: (id: string) => void
}

export const Task = ({ id, title, completed, onCheck, onDelete }: TaskProps) => {
  return (
    <div>
      <div>{title}</div>
      <input type="checkbox" checked={completed} onChange={() => onCheck(id)} />
      <button onClick={() => onDelete(id)} />
    </div>
  )
}
