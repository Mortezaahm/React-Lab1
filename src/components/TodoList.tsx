// List of all todos
// map -> TodoItem
import TodoItem from "./TodoItem"
import type { Todo } from "../types/Todo"

type Props = {
     todos: Todo[]
     onDelete: (id: number) => void
     onEdit: (todo: Todo) => void
     onToggle:(todo:Todo) => void
}

function TodoList({todos, onDelete, onEdit, onToggle}: Props) {

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
                onToggle={onToggle}
            />
            ))}
        </ul>
    </div>
    </>
  )
}

export default TodoList
