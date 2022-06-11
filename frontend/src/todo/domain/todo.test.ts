import { Todo } from "./todo"
import { tasks } from "@/todo/__fixtures__/tasks"

describe("Todo Model", () => {
  it("returns all task items", () => {
    const todo = new Todo(tasks)

    expect(todo.taskItems).toHaveLength(3)
  })

  it("returns number of active tasks", () => {
    const todo = new Todo(tasks)

    expect(todo.activeTaskCount).toEqual(2)
  })

  describe("returns whether all tasks are completed or not", () => {
    it("returns true if all tasks are completed", () => {
      const todo = new Todo(tasks.map((task) => ({ ...task, completed: true })))

      expect(todo.isAllTasksChecked).toBe(true)
    })

    it("returns false if all tasks are not completed", () => {
      const todo = new Todo(tasks)

      expect(todo.isAllTasksChecked).toBe(false)
    })
  })
})
