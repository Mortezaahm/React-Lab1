import type { Todo } from "../types/Todo"

type Props = {
    todo: Todo
    onDelete: (id: number) => void
    onEdit: (todo: Todo) => void
    onToggle: (todo:Todo) => void
}

function TodoItem({todo, onDelete, onEdit, onToggle}: Props) {
  return (
    <>
        <li className={todo.completed ? "completed" : ""}>
          <div className="left">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo)}
            />
            <span className="todo-text">{todo.todo}</span>
          </div>

          <div className="actions">
            <button className="edit-btn" onClick={() => onEdit(todo)}>
              Edit
            </button>

            <button className="delete-btn" onClick={() => {
              if (confirm("Are you sure to delete this?")) {
                onDelete(todo.id)
              }
            }}>
              Delete
            </button>
          </div>
        </li>
    </>
  )
}

export default TodoItem
