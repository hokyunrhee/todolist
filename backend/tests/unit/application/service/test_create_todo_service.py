from unittest.mock import MagicMock

from src.todo.application.port.input.create_todo_usecase import CreateTodoCommand
from src.todo.application.service.create_todo_service import CreateTodoService
from src.todo.domain.todo_item import TodoItem


def test_should_create_todolist():
    # given
    command = CreateTodoCommand(title='workout')
    fake_repository = MagicMock(name='TodoFaskeRepository')
    fake_repository.create.return_value = TodoItem.create(title=command.title)

    # when
    service = CreateTodoService(fake_repository)
    result = service.create(command)

    # then
    assert result, 'todolist should not be empty'
    assert result.title, 'todolist title should not be empty'
    assert result.complete == False, 'todo item should be not complete when created todo list'

