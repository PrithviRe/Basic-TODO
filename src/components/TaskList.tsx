"use client";

import { Task } from "@/types/task";

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  if (tasks.length === 0) {
    return (
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        No tasks yet...
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-3 rounded-md border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="h-4 w-4"
            />
            <span
              className={
                task.completed
                  ? "line-through text-slate-400 dark:text-slate-500"
                  : "text-black dark:text-white"
              }
            >
              {task.text}
            </span>
          </label>

          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-600 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
