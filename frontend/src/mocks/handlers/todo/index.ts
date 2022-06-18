import { addTask } from "./addTask"
import { getTasks } from "./getTasks"
import { deleteTask } from "./deleteTask"
import { updateTask } from "./updateTask"
import { bulkUpdateTasks } from "./bulkUpdateTasks"
import { bulkDeleteTasks } from "./bulkDeleteTasks"

export const todoHandlers = [addTask, getTasks, deleteTask, updateTask, bulkDeleteTasks, bulkUpdateTasks]
