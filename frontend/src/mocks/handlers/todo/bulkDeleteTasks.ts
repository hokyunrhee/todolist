import { rest } from "msw"

import { Task } from "@/todo/api/types"
import { tasks } from "./db"

type Bulk = Task["id"][]

export const bulkDeleteTasks = rest.delete<Bulk>("/api/tasks", (req, res, ctx) => {
  const ids = req.url.searchParams.getAll("id")

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i]
    const indexOfTargetTask = tasks.findIndex((task) => task.id === id)
    tasks.splice(indexOfTargetTask, 1)
  }

  return res(ctx.status(204))
})
