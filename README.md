# Todo App (React + TypeScript)

A simple and functional Todo application built with React, TypeScript, and a public API.
The app demonstrates full CRUD operations along with search, filtering, and optimistic UI updates.

# Features
Fetch todos from API (GET)
Add new todos (POST)
Edit existing todos (PUT)
Delete todos (DELETE)
Live search functionality
Filter by status (All / Active / Completed)
Toggle completion status
Optimistic UI updates (instant feedback before API response)
Loading & error handling
Clean and responsive UI

# Tech Stack
React
TypeScript
Vite
Fetch API
CSS (custom styling)

# API Used
This project uses the public API:
https://dummyjson.com/todos
API Endpoints used:
GET /todos → Fetch all todos
POST /todos/add → Create new todo
PUT /todos/:id → Update todo
DELETE /todos/:id → Delete todo

# Project Structure
src/
 ├── api/              # API requests (CRUD functions)
 ├── components/      # UI components (TodoItem, TodoList, TodoForm)
 ├── pages/           # Main page (Home)
 ├── types/           # TypeScript types
 ├── App.tsx
 └── main.tsx

# How to Run Locally
1. Clone repository
git clone <your-repo-url>
2. Install dependencies
npm install
3. Run development server
npm run dev

# Key Learning Outcomes

This project demonstrates:
Component-based architecture in React
Proper TypeScript usage in a React app
State management using hooks
CRUD operations with REST API
Controlled forms
Filtering and searching logic
UI/UX improvements (loading, empty states)
Optimistic UI updates

# Future Improvements
Local storage persistence
Drag & drop reordering
Pagination or infinite scroll
Better error UI (toast notifications)
Unit testing (Jest / React Testing Library)

 # Author
Built as a learning project to master React + TypeScript fundamentals and real-world CRUD patterns.
