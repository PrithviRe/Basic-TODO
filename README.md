# 📝 Next.js To-Do App

A modern **to-do list web app** built with **Next.js**, **TypeScript**, and **TailwindCSS**.  
Supports task creation, editing, deletion, filtering, and persistence via `localStorage`.

---

## ✨ Features

- ➕ Add new tasks
- ✏️ Inline edit tasks (double-click to edit)
- ✅ Mark tasks as complete
- ❌ Delete tasks
- 🔍 Filters: **All / Active / Completed**
- 📊 Task counter + “Clear completed” action
- 🌗 Light / Dark mode toggle
- 💾 Data saved to `localStorage`
- 📱 Fully responsive design
- 🎨 Clean UI with TailwindCSS

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Getting Started

#### 1. Clone repo

```bash
git clone https://github.com/PrithviRe/Basic-TODO.git

cd Basic-TODO
```

#### 2. Install dependencies

```
pnpm install
```

(or use npm install / yarn install if you prefer)

#### 3. Run dev server

```
pnpm dev
```

App will be available at http://localhost:3000

---

### 📂 Project Structure

```
src/
 ├─ app/
 │   ├─ layout.tsx        # Root layout (theme provider)
 │   ├─ page.tsx          # Main to-do app page
 │   └─ globals.css       # Global styles + Tailwind layers
 │
 ├─ components/ 
 │   ├─ Header.tsx        # App header + title
 │   ├─ TaskInput.tsx     # Input form for new tasks
 │   ├─ TaskList.tsx      # Task list + inline editing
 │   ├─ TaskFilters.tsx   # Filters + footer actions
 │   └─ ThemeToggle.tsx   # Day/Night mode switch
 │
 ├─ types/
 │   └─ task.ts           # Task type definition
```

### 🖥️ Usage

    Add task → Type in input, press Enter.

    Edit task → Double-click text, edit inline, press Enter or blur to save.

    Complete task → Click checkbox.

    Delete task → Click Delete button.

    Filter tasks → Use All / Active / Completed buttons.

    Clear completed → Footer button removes all done tasks.

    Dark mode → Toggle via system preference or using button.

### 🔮 Next Steps (future improvements)

    🌐 Backend API + database (Prisma + Postgres/Supabase)

    🔑 OAuth authentication (e.g. GitHub/Google with NextAuth.js)

    📱 Drag-and-drop task ordering

    ✨ Framer Motion animations

    ☁️ Deployment with production database

### 📜 License

MIT © PrithviRe
