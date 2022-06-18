import { rest } from "msw"

import { tasks } from "./db"

export const deleteTask = rest.delete("/api/tasks/:id", (req, res, ctx) => {
  const { id } = req.params

  if (typeof id !== "string") {
    return
  }

  const indexOfTargetTask = tasks.findIndex((task) => task.id === id)
  tasks.splice(indexOfTargetTask, 1)

  return res(ctx.status(204))
})
