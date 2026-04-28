// show just one todo
// edit and delete button
import type { Todo } from "../types/Todo"

type Props = {
    todo: Todo
    onDelete: (id: number) => void
    onEdit: (todo: Todo) => void
}

function TodoItem({todo, onDelete, onEdit}: Props) {
  return (
    <>
        <li>
          <span className="todo-text">{todo.todo}</span>

          <button className="edit-btn" onClick={() => onEdit(todo)}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
    </>
  )
}

export default TodoItem
