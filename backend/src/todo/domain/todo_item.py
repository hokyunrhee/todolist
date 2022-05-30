class TodoItem:
    id: int
    title: str
    complete: bool

    def __init__(self,id: int, title: str, complete: bool):
        self.id = id
        self.title = title
        self.complete = complete
