import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { NewTask } from "./new-task"

const mockHandleAddTask = jest.fn()
const mockHandleCheckAllTasks = jest.fn()

describe("NewTask", () => {
  it("adds new task with title", () => {
    render(<NewTask onAdd={mockHandleAddTask} onCheckAll={mockHandleCheckAllTasks} />)

    const textBox = screen.getByRole("textbox")
    const newTitle = "implement your app"
    userEvent.type(textBox, `${newTitle}{enter}`)

    expect(mockHandleAddTask).toHaveBeenCalledTimes(1)
    expect(mockHandleAddTask).toHaveBeenCalledWith(newTitle)
    expect(textBox).toHaveValue("")
  })

  it('clicks "check all" button', () => {
    render(<NewTask onAdd={mockHandleAddTask} onCheckAll={mockHandleCheckAllTasks} />)

    const button = screen.getByRole("button")
    userEvent.click(button)

    expect(mockHandleCheckAllTasks).toHaveBeenCalledTimes(1)
  })
})
