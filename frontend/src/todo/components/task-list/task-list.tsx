import { TaskItem } from "@/todo/domain/task-item"
import { TaskRow } from "@/todo/components/task-row"

interface TaskListProps {
  taskItems: TaskItem[]
  onCheck: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export const TaskList = ({ taskItems, onCheck, onDelete, onUpdate }: TaskListProps) => {
  return (
    <ul>
      {taskItems.map((taskItem) => (
        <TaskRow key={taskItem.id} taskItem={taskItem} onCheck={onCheck} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  )
}
