// create + edit
// controlled inputs

import { useState, useEffect } from "react"
import type { CreateTodo, Todo } from "../types/Todo"

type Props = {
  onAddTodo: (text: string) => void
  onUpdateTodo: (id: number, todo: CreateTodo) => void
  editingTodo: Todo | null
}

function TodoForm( { onAddTodo, onUpdateTodo, editingTodo } : Props) {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TodoForm
