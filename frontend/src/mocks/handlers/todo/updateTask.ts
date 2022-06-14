import { rest } from "msw"

import { Task } from "@/todo/api/types"
import { tasks } from "./db"

type Body = Partial<Pick<Task, "title" | "completed">>

export const updateTask = rest.patch<Body>("/api/tasks/:id", (req, res, ctx) => {
  const { id } = req.params
  const { title, completed } = req.body

  const indexOfTargetTask = tasks.findIndex((task) => task.id === id)
  tasks[indexOfTargetTask] = {
    id: tasks[indexOfTargetTask].id,
    title: title ?? tasks[indexOfTargetTask].title,
    completed: completed ?? tasks[indexOfTargetTask].completed,
  }

  if (tasks[indexOfTargetTask].title.length === 0) {
    tasks.splice(indexOfTargetTask, 1)
  }

  return res(ctx.status(200))
})
