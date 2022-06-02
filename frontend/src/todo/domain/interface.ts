export interface Task {
  id: string
  title: string
  completed: boolean
}

export interface TaskProps extends Task {
  onCheck: (id: string) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export interface TaskListProps {
  tasks: Task[]
  onCheck: (id: string) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}
