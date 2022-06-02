import { render, screen } from "@testing-library/react"

import { TaskList } from "./task-list"
import { tasks } from "./__fixtures__/tasks"

const setup = () => render(<TaskList tasks={tasks} />)

describe("TaskList", () => {
  it("renders list of items with provided tasks", () => {
    setup()

    const listItem = screen.getAllByRole("listitem")
    expect(listItem).toHaveLength(3)
  })
})
