"use client";

import { useState, useEffect } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilters, { Filter } from "@/components/TaskFilters";
import { Task } from "@/types/task";

const STORAGE_KEY = "todo-tasks";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTasks(JSON.parse(raw));
    } catch {}
  }, []);

  // save
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function editTask(id: string, text: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((t) => !t.completed));
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.length - activeCount;

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-2">Your Today</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Double-click to edit, filter your tasks, and clear completed ones.
        </p>
      </section>

      <TaskInput onAdd={addTask} />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />

      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
        <TaskFilters filter={filter} setFilter={setFilter} />

        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span>{activeCount} active</span>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="hover:underline text-red-500"
            >
              Clear completed ({completedCount})
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
