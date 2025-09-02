"use client";

import { useState } from "react";
import { Task } from "@/types/task";

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  return tasks.length === 0 ? (
    <p className="text-slate-500 dark:text-slate-400 text-sm">
      No tasks yet — add something above 👆
    </p>
  ) : (
    <ul className="divide-y divide-slate-200 dark:divide-slate-700 rounded-md border border-slate-200 dark:border-slate-700">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="h-4 w-4 accent-blue-600"
            />

            {editingId === task.id ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onEdit(task.id, draft.trim());
                  setEditingId(null);
                }}
                className="flex-1"
              >
                <input
                  autoFocus
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onBlur={() => setEditingId(null)}
                  className="w-full rounded border px-2 py-1 text-sm"
                />
              </form>
            ) : (
              <span
                onDoubleClick={() => {
                  setEditingId(task.id);
                  setDraft(task.text);
                }}
                className={
                  task.completed
                    ? "line-through text-slate-400 dark:text-slate-500 cursor-pointer"
                    : "text-black dark:text-white cursor-pointer"
                }
              >
                {task.text}
              </span>
            )}
          </div>

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
