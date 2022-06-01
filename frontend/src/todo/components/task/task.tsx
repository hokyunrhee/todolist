import React, { useState } from "react"

interface TaskProps {
  id: string
  title: string
  completed: boolean
  onCheck: (id: string) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export const Task = ({ id, title, completed, onCheck, onDelete, onUpdate }: TaskProps) => {
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

  const handleDoubleClick = (completed: boolean) => {
    if (!completed) {
      setIsEditing(true)
    }
  }

  return isEditing ? (
    <div>
      <input
        type="text"
        defaultValue={title}
        onBlur={(event) => handleBlur(event, id)}
        onKeyDown={(event) => handleKeyDown(event, id)}
      />
    </div>
  ) : (
    <div>
      <input type="checkbox" defaultChecked={completed} onClick={() => onCheck(id)} />
      <label onDoubleClick={() => handleDoubleClick(completed)}>{title}</label>
      <button onClick={() => onDelete(id)} />
    </div>
  )
}
