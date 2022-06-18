import { rest } from "msw"

import { Task } from "@/todo/api/types"
import { tasks } from "./db"

type Bulk = (Pick<Task, "id"> & Partial<Pick<Task, "title" | "completed">>)[]

export const bulkUpdateTasks = rest.patch<Bulk>("/api/tasks", (req, res, ctx) => {
  const bulk = req.body

  bulk.forEach((item) => {
    const indexOfTargetTask = tasks.findIndex((task) => task.id === item.id)
    tasks[indexOfTargetTask] = {
      id: item.id,
      title: item.title ?? tasks[indexOfTargetTask].title,
      completed: item.completed ?? tasks[indexOfTargetTask].completed,
    }
  })

  return res(ctx.status(204))
})
