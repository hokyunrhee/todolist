import React, { useState } from "react"

import { TaskTitleInput } from "./task-title-input"
import { TaskItem } from "@/todo/domain/task-item"

interface TaskRowProps {
  taskItem: TaskItem
  onCheck: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export const TaskRow = ({ taskItem, onCheck, onDelete, onUpdate }: TaskRowProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdateTitle = (event: React.FormEvent<HTMLInputElement>, id: string) => {
    const title = event.currentTarget.value

    if (title.length === 0) {
      onDelete(id)
    } else {
      onUpdate(id, title)
    }

    setIsEditing(false)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>, id: string) => {
    handleUpdateTitle(event, id)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (event.key === "Enter") {
      handleUpdateTitle(event, id)
    }
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const completed = event.currentTarget.checked
    onCheck(id, completed)
  }

  const handleDoubleClick = (completed: boolean) => {
    if (!completed) {
      setIsEditing(true)
    }
  }

  return isEditing ? (
    <li>
      <TaskTitleInput
        title={taskItem.title}
        onBlur={(event) => handleBlur(event, taskItem.id)}
        onKeyDown={(event) => handleKeyDown(event, taskItem.id)}
      />
    </li>
  ) : (
    <li>
      <input
        type="checkbox"
        aria-checked={taskItem.completed}
        aria-label={taskItem.title}
        checked={taskItem.completed}
        onChange={(event) => handleCheck(event, taskItem.id)}
      />
      <label onDoubleClick={() => handleDoubleClick(taskItem.completed)}>{taskItem.title}</label>
      <button onClick={() => onDelete(taskItem.id)}>delete</button>
    </li>
  )
}
