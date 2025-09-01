"use client";

import TaskInput from "@/components/TaskInput";

export default function Home() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-2">Your Today</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Skibidi Task List
        </p>
      </section>

      <section>
        <TaskInput
          onAdd={(text) => {
            console.log("page received new task:", text);
          }}
        />
      </section>
    </div>
  );
}