// List of all todos
// map -> TodoItem
import TodoItem from "./TodoItem"
import type { Todo } from "../types/Todo"

type Props = {
     todos: Todo[]
     onDelete: (id: number) => void
}

function TodoList({todos, onDelete}: Props) {

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
            />
            ))}
        </ul>
    </div>
    </>
  )
}

export default TodoList
