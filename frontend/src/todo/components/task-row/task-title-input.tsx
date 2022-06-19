import React, { useState } from "react"

type EventHandler = Required<Pick<React.HTMLAttributes<HTMLInputElement>, "onBlur" | "onKeyDown">>
interface TaskTitleInputProps extends EventHandler {
  title: string
}

export const TaskTitleInput = ({ title, ...rest }: TaskTitleInputProps) => {
  const [text, setText] = useState(title)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value
    setText(text)
  }

  return <input type="text" value={text} onChange={handleChange} {...rest} />
}
