// show just one todo
// edit and delete button
import type { Todo } from "../types/Todo"

type Props = {
    todo: Todo
    onDelete: (id: number) => void
}

function TodoItem({todo, onDelete}: Props) {
  return (
    <>
        <li>
            {todo.todo}
            <button onClick={() => onDelete(todo.id)}> Delete </button>
        </li>
    </>
  )
}

export default TodoItem
