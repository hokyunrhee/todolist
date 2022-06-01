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

  const handleUpdateTitle = (event: React.FormEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value
    const id = event.currentTarget.getAttribute("data-id") as string

    if (title.length === 0) {
      onDelete(id)
    } else {
      onUpdate(id, title)
    }

    setIsEditing(false)
  }

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    handleUpdateTitle(event)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      handleUpdateTitle(event)
    }
  }

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  return isEditing ? (
    <div>
      <input type="text" defaultValue={title} data-id={id} onBlur={handleBlur} onKeyDown={handleKeyDown} />
    </div>
  ) : (
    <div>
      <input type="checkbox" defaultChecked={completed} onClick={() => onCheck(id)} />
      <label onDoubleClick={handleDoubleClick}>{title}</label>
      <button onClick={() => onDelete(id)} />
    </div>
  )
}
