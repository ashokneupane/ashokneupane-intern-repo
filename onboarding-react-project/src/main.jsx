/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";
import Form from "./components/Form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <div className="bg-white p-4 border rounded w-full">
        <HelloWorld name="Focus Bear!" />
      </div>

      <div className="bg-white p-4 border rounded w-full">
        <Counter />
      </div>
      <div className="bg-white p-6 border rounded w-full">
        <Form />
      </div>
    </div>
  </StrictMode>,
);
