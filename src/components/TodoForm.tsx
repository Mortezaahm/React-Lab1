import { useState, useEffect } from "react"
import type { CreateTodo, Todo } from "../types/Todo"

type Props = {
  onAddTodo: (text: string) => void
  onUpdateTodo: (id: number, todo: CreateTodo) => void
  onCancelEdit: () => void
  editingTodo: Todo | null
}

function TodoForm( { onAddTodo, onUpdateTodo, onCancelEdit ,editingTodo } : Props) {
  const [title, setTitle] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if (editingTodo) {
      const updated = {
        todo: title,
        completed: editingTodo.completed,
        userId: editingTodo.userId
      }

      onUpdateTodo(editingTodo.id, updated)
    } else {
      onAddTodo(title)
    }
    setTitle("")
  }

  useEffect(() => {
  if (editingTodo) {
    setTitle(editingTodo.todo)
  } else {
    setTitle("")
  }
}, [editingTodo])

  return (
    <>
    <h3>{editingTodo ? "Edit Todo" : "Add Todo"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          {editingTodo ? "Update" : "Add"}
        </button>
        {editingTodo && (
          <button type="button" className="cancel-btn" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </form>
    </>
  )
}

export default TodoForm
