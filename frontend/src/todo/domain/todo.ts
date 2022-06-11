import { TaskItem } from "./task-item"

type Tasks = Pick<TaskItem, keyof TaskItem>[]

export class Todo {
  private _taskItems: TaskItem[]

  constructor(tasks: Tasks) {
    this._taskItems = tasks.map((task) => new TaskItem(task))
  }

  get taskItems() {
    return this._taskItems
  }

  get activeTaskCount() {
    return this._taskItems.reduce((acc, cur) => acc + +!cur.completed, 0)
  }

  get isAllTasksChecked() {
    return this._taskItems.every((task) => task.completed)
  }
}
