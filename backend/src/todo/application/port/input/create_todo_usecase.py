import abc

from backend.src.todo.domain.todo_item import TodoItem



class CreateTodoCommand:
    def __init__(self, title, complete=False):
        self.title = title
        self.complete = complete


class CreateTodoUsecase(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def create(self, todo_command: CreateTodoCommand) -> TodoItem:
        raise NotImplementedError
