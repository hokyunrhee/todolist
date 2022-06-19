import { NewTask } from "@/todo/components/new-task"
import { TaskList } from "@/todo/components/task-list"
import { Footer } from "@/todo/components/footer"
import {
  useGetTasks,
  useAddTask,
  useDeleteTask,
  useUpdateTask,
  useBulkUpdateTasks,
  useBulkDeleteTasks,
} from "@/todo/api"
import { TaskItem } from "@/todo/domain/task-item"

export const Todo = () => {
  const { data: tasks } = useGetTasks()
  const taskItems = tasks ?? []
  const taskCount = tasks?.length ?? 0
  const { mutate: addTask } = useAddTask()
  const handleAdd = (title: string) => addTask({ title })
  const { mutate: handleDelete } = useDeleteTask()
  const { mutate: updateTask } = useUpdateTask()
  const handleUpdate = (id: string, title: string) => updateTask({ id, title })
  const handleCheck = (id: string, completed: boolean) => updateTask({ id, completed })
  const { mutate: bulkUpdate } = useBulkUpdateTasks()
  const handleCheckAll = () => {
    const isAllTasksChecked = taskItems.some((task) => task.completed)
    if (isAllTasksChecked) {
      bulkUpdate(taskItems.map((task) => ({ ...task, completed: false })))
      return
    }
    bulkUpdate(taskItems.map((task) => ({ ...task, completed: true })))
  }
  const { mutate: bulkDelete } = useBulkDeleteTasks()
  const handleClearCompleted = () => {
    bulkDelete(taskItems.filter((task) => task.completed).map((task) => task.id))
  }

  return (
    <div>
      <NewTask onAdd={(title) => handleAdd(title)} onCheckAll={handleCheckAll} />
      <TaskList
        taskItems={taskItems as TaskItem[]}
        onCheck={(id, completed) => handleCheck(id, completed)}
        onDelete={(id) => handleDelete(id)}
        onUpdate={(id, title) => handleUpdate(id, title)}
      />
      <Footer taskCount={taskCount} onClearCompleted={handleClearCompleted} />
    </div>
  )
}
