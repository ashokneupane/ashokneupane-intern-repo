import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="bg-white p-4 border rounded w-full">
        <HelloWorld name="Focus Bear!" />
      </div>

      <div className="bg-white p-4 border rounded w-full">
        <Counter />
      </div>
    </div>
  </StrictMode>,
);
