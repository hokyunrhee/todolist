import { rest } from "msw"

import { Task } from "@/todo/api/types"
import { tasks } from "./db"

export const addTask = rest.post<Pick<Task, "title">>("/api/tasks", (req, res, ctx) => {
  const { title } = req.body
  const newTask: Task = { id: `${Math.floor(Date.now() * Math.random())}`, title, completed: false }
  tasks.push(newTask)

  return res(ctx.status(201), ctx.json(newTask))
})
