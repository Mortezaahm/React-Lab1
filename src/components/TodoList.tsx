// List of all todos
// map -> TodoItem
import TodoItem from "./TodoItem"
import type { Todo } from "../types/Todo"

type Props = {
     todos: Todo[]
     onDelete: (id: number) => void
     onEdit: (todo: Todo) => void
}

function TodoList({todos, onDelete, onEdit}: Props) {

  return (
    <>
    <div>
        <h4>Todos List</h4>
        <ul>
            {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onDelete= {onDelete}
                onEdit= {onEdit}
            />
            ))}
        </ul>
    </div>
    </>
  )
}

export default TodoList
