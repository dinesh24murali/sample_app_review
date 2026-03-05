import type { Route } from "./+types/home";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Counter Demo" },
    { name: "description", content: "Simple React counter component demo." },
  ];
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Counter App</h1>
      <p>Current count: {count}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button type="button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </main>
  );
}
