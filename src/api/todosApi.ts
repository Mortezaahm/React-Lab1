// API
/*
getTodos() ***
createTodo(todo: string)
updateTodo(id, data)
deleteTodo(id)
*/

import type { Todo } from "../types/Todo";

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
