type Task = {
  id: string
  title: string
  completed: boolean
}

export class TaskItem {
  private _id: string
  private _title: string
  private _completed: boolean

  constructor({ id, title, completed }: Task) {
    this._id = id
    this._title = title
    this._completed = completed
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get completed() {
    return this._completed
  }
}
