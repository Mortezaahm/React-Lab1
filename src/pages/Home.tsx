// fetch data
// main state
// send props

import { useState, useEffect } from "react"
import type { CreateTodo, Todo } from "../types/Todo";
import { getTodos, deleteTodo, addTodo, updateTodo } from "../api/todosApi"
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
// import TodoItem from "../components/TodoItem";

function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  async function handleAddTodo(text: string){
    const newTodo = {
      todo: text,
      completed: false,
      userId: 1
    }
    setLoading(true)
    setError(null)
    try {
      const createdTodo = await addTodo(newTodo)
      setTodos(prev => [...prev, createdTodo])
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  function handleStartEdit(todo: Todo) {
  setEditingTodo(todo)
}

function handleCancelEdit() {
  setEditingTodo(null)
}

  async function handleUpdateTodo(id:number, updatedData:CreateTodo) {
    try {
      const updatedTodo = await updateTodo(id, updatedData)
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? updatedTodo : todo
        )
      )
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setEditingTodo(null)
    }
  }

  async function handleDeleteTodo(id:number) {
    setLoading(true)
    setError(null)
     try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id))
     } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function fetchTodosHandler () {
    setLoading(true)
    setError(null)
    try {
      const data = await getTodos()
      setTodos(data)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  fetchTodosHandler()

  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h2>{error}</h2>
  }


  return (
    <>
    <div className="app">
      <div className="card">
        <TodoForm
          onAddTodo = {handleAddTodo}
          onUpdateTodo= {handleUpdateTodo}
          onCancelEdit={handleCancelEdit}
          editingTodo= {editingTodo}
        />
        <TodoList
          todos={todos}
          onDelete = {handleDeleteTodo}
          onEdit={handleStartEdit}
          />
      </div>
    </div>
    </>
  )
}

export default Home
