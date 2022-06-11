import { NewTask } from "@/todo/components/new-task"
import { TaskList } from "@/todo/components/task-list"
import { Footer } from "@/todo/components/footer"

export const Todo = () => {
  const handleAdd = () => {
    //
  }
  const handleCheckAll = () => {
    //
  }
  const handleCheck = () => {
    //
  }
  const handleDelete = () => {
    //
  }
  const handleUpdate = () => {
    //
  }
  const handleClearCompleted = () => {
    //
  }

  const taskItems: any[] = []
  const taskCount = 0
  const isToggleAllShow = false

  return (
    <div>
      <NewTask isToggleAllShow={isToggleAllShow} onAdd={handleAdd} onCheckAll={handleCheckAll} />
      <TaskList taskItems={taskItems} onCheck={handleCheck} onDelete={handleDelete} onUpdate={handleUpdate} />
      <Footer taskCount={taskCount} onClearCompleted={handleClearCompleted} />
    </div>
  )
}
