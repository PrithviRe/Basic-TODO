"use client";

import { useState } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { Task } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-2">Your Today</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Add tasks below and check them off as you go.
        </p>
      </section>

      <section>
        <TaskInput onAdd={addTask} />
      </section>

      <section>
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </section>
    </div>
  );
}
