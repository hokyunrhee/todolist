import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Task } from "./task"
import { task } from "./__fixtures__/task"

const mockOnCheck = jest.fn()
const mockOnDelete = jest.fn()
const setup = () => render(<Task {...task} onCheck={mockOnCheck} onDelete={mockOnDelete} />)

describe("Task", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("renders with title and checkbox", () => {
    setup()

    const title = screen.getByText(task.title)
    const checkbox = screen.getByRole("checkbox")

    expect(title).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it("clicks checkbox", () => {
    setup()

    const checkbox = screen.getByRole("checkbox")
    userEvent.click(checkbox)

    expect(mockOnCheck).toBeCalledTimes(1)
    expect(mockOnCheck).toBeCalledWith(task.id)
  })

  it("clicks delete button", () => {
    setup()

    const deleteButton = screen.getByRole("button")
    userEvent.click(deleteButton)

    expect(mockOnDelete).toBeCalledTimes(1)
    expect(mockOnDelete).toBeCalledWith(task.id)
  })
})
