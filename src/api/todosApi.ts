// API
/*
getTodos() ***
createTodo(todo: string) ***
updateTodo(id, data)
deleteTodo(id)
*/

import type { Todo, CreateTodo } from "../types/Todo";

// get data function - GET
export async function getTodos(): Promise<Todo[]> {
  const url = "https://dummyjson.com/todos";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const result = await response.json();
  console.log(result);
  return result.todos;
}

// add new data - POST
export async function addTodo(newTodo: CreateTodo):Promise<Todo> {
  const url = `https://dummyjson.com/todos/add`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newTodo)
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  return response.json()
}

// Update data - PUT
export async function updateTodo(id: number, updatedField: CreateTodo):Promise<Todo> {
  const url = `https://dummyjson.com/todos/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(updatedField)
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  return response.json()
}

// Delete data
export async function deleteTodo(id: number) {
  const url = `https://dummyjson.com/todos/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  })
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const result= await response.json()
  return result
}
