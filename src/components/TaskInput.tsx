"use client";

import { useState } from "react";

export default function TaskInput({ onAdd }: { onAdd?: (text: string) => void }) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    console.log("New task:", trimmed);
    onAdd?.(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <label htmlFor="task" className="block text-sm font-medium mb-1">
        Add a task
      </label>
      <div className="flex gap-2">
        <input
          id="task"
          name="task"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g., Buy groceries"
          className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-opacity-60"
          aria-label="Task description"
        />
        <button
          type="submit"
          className="rounded-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          disabled={!value.trim()}
        >
          Add
        </button>
      </div>
    </form>
  );
}