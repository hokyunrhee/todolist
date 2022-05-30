import abc

from src.todo.domain.todo_item import TodoItem


class CreateTodoCommand:
    def __init__(self, title):
        self.title = title

    def to_todo_item(self):
        return TodoItem.create(self.title)


class CreateTodoUsecase(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def create(self, todo_command: CreateTodoCommand) -> TodoItem:
        raise NotImplementedError
