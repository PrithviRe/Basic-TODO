"use client";

export type Filter = "all" | "active" | "completed";

export default function TaskFilters({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: (f: Filter) => void;
}) {
  const options: Filter[] = ["all", "active", "completed"];

  return (
    <div className="flex gap-2 text-sm">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setFilter(opt)}
          className={`px-3 py-1 rounded-md border ${
            filter === opt
              ? "bg-blue-600 text-white border-blue-600"
              : "border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          {opt[0].toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
}
