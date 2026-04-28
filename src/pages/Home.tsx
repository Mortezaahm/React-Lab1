import { useState, useEffect } from "react"
import type { CreateTodo, Todo } from "../types/Todo";
import { getTodos, deleteTodo, addTodo, updateTodo } from "../api/todosApi"
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

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

      setTodos(prev =>
        prev.map(todo =>
          todo.id === id
           ? {...todo, ...updatedData}
           : todo
        )
      )
    try {
      await updateTodo(id, updatedData)
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

  function handleToggle(todo: Todo) {
    handleUpdateTodo(todo.id, {
      ...todo,
      completed: !todo.completed
    })
  }

  useEffect(() => {
    fetchTodosHandler()
  }, [])

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed
      if (filter === "completed") return todo.completed
      return true
    })
    .filter((todo) =>
      todo.todo.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <>
    {loading && <h4>Loading...</h4>}
    {error && <h4>{error}</h4>}
    <div className="app">
      <div className="card">
        <div className="top-section">
          <TodoForm
            onAddTodo = {handleAddTodo}
            onUpdateTodo= {handleUpdateTodo}
            onCancelEdit={handleCancelEdit}
            editingTodo= {editingTodo}
          />

          <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredTodos.length === 0 && <p>No todos found</p>}

          <div className="filter">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}>
                All
            </button>
            <button
              className={filter === "active" ? "active" : ""}
              onClick={() => setFilter("active")}>
                Active
            </button>
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}>
                Completed
            </button>
          </div>
        </div>
        <div className="list-section">
          <TodoList
            todos={filteredTodos}
            onDelete = {handleDeleteTodo}
            onEdit={handleStartEdit}
            onToggle={handleToggle}
            />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
