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
            {todo.todo}
            <button onClick={() => onEdit(todo)}> Edit </button>
            <button onClick={() => onDelete(todo.id)}> Delete </button>
        </li>
    </>
  )
}

export default TodoItem
