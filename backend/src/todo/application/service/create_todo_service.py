from src.todo.domain.todo_item import TodoItem
from src.todo.application.port.input.create_todo_usecase import CreateTodoCommand
from src.todo.application.port.input.create_todo_usecase import CreateTodoUsecase
from src.todo.application.port.output.todo_list_repository import TodoListRepository


class CreateTodoService(CreateTodoUsecase):
    def __init__(self, repository: TodoListRepository):
        self.repository = repository

    def create(self, todo_command: CreateTodoCommand) -> TodoItem:
            return self.repository.create(todo_command.to_todo_item())
