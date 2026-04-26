// create + edit
// controlled inputs

import { useState } from "react"

function TodoForm( { onAddTodo } : { onAddTodo: (text: string) => void}) {
  const [title, setTitle] = useState("")

  function handleAddTodo(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    onAddTodo(title)
    setTitle("")
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
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
