import { render, screen } from "@testing-library/react"

import { Task } from "./task"

describe("Task", () => {
  it("renders with title and checkbox", () => {
    const todoItem = { id: "1", title: "go to bed", compelted: false }
    render(<Task {...todoItem} />)

    const title = screen.getByText(todoItem.title)
    const checkbox = screen.getByRole("checkbox")

    expect(title).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })
})
