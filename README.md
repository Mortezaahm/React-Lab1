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

# Svara på frågor
**Vad innebär det att en webbplats är tillgänglig?**
En tillgänglig webbplats innebär att den kan användas av alla människor, oavsett funktionsförmåga eller tekniska hjälpmedel. Det handlar om att innehållet ska vara möjligt att uppfatta, hantera, förstå och robust enligt riktlinjerna i WCAG (Web Content Accessibility Guidelines).
Det innebär till exempel att personer som använder skärmläsare, navigerar med tangentbord eller har nedsatt syn eller motorik ska kunna ta del av webbplatsen på ett likvärdigt sätt.

**Varför är tillgänglighet viktig vid utveckling av webbapplikationer?**
Tillgänglighet är viktig eftersom den säkerställer att alla användare har lika tillgång till digitala tjänster. Det förbättrar inte bara upplevelsen för personer med funktionsvariationer, utan leder även till bättre användbarhet för alla användare.
Dessutom finns det lagkrav inom EU (t.ex. EU:s tillgänglighetsdirektiv) som ställer krav på att digitala tjänster ska följa tillgänglighetsstandarder som WCAG. Att arbeta med tillgänglighet bidrar också till bättre struktur, SEO och långsiktig hållbarhet i applikationen.

**Ge tre konkreta exempel på hur man kan göra en React-applikation mer tillgänglig**

**1- Använd semantisk HTML och ARIA-attribut**
Till exempel <button>, <label> och aria-label för att göra komponenter tydliga för hjälpmedel som skärmläsare.

**2- Säkerställ tangentbordsnavigering (keyboard accessibility)**
Alla interaktiva element ska kunna nås och användas med tangentbord (Tab, Enter, Space), utan att behöva mus.

**3- Hantera fokus och visuella tillstånd**
Visa tydlig fokusmarkering (:focus) och se till att fokus flyttas korrekt vid t.ex. modaler eller formulärinteraktioner.
