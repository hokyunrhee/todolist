import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Task } from "./task"
import { task } from "./__fixtures__/task"

describe("Task", () => {
  it("renders with title and checkbox", () => {
    render(<Task {...task} />)

    const title = screen.getByText(task.title)
    const checkbox = screen.getByRole("checkbox")

    expect(title).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it("clicks checkbox", () => {
    const mockOnCheck = jest.fn()

    render(<Task {...task} onCheck={mockOnCheck} />)

    const checkbox = screen.getByRole("checkbox")
    userEvent.click(checkbox)

    expect(mockOnCheck).toBeCalledTimes(1)
    expect(mockOnCheck).toBeCalledWith(task.id)
  })

  it("clicks delete button", () => {
    const mockOnDelete = jest.fn()

    render(<Task {...task} onDelete={mockOnDelete} />)

    const deleteButton = screen.getByRole("button")
    userEvent.click(deleteButton)

    expect(mockOnDelete).toBeCalledTimes(1)
    expect(mockOnDelete).toBeCalledWith(task.id)
  })
})
