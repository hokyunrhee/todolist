import { Task } from "@/todo/components/task"
import { TaskListProps } from "@/todo/domain/interface"

export const TaskList = ({ tasks, onCheck, onDelete, onUpdate }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} {...task} onCheck={onCheck} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  )
}
