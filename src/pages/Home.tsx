// fetch data
// main state
// send props

import { useState, useEffect } from "react"
import type { Todo } from "../types/Todo";
import { getTodos, deleteTodo, addTodo } from "../api/todosApi"
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
// import TodoItem from "../components/TodoItem";

function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
  // const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

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
      <TodoList
        todos={todos}
        onDelete = {handleDeleteTodo}
        />
      <TodoForm
        onAddTodo = {handleAddTodo}
      />
    </>
  )
}

export default Home
