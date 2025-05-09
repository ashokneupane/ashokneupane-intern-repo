import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";
import Form from "./components/Form.jsx";
import Timer from "./hooks/CleanUpUseEffect.jsx";
import { useState } from "react";

export default function Home() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <div className="bg-white p-4 border rounded w-full">
        <HelloWorld name="Focus Bear!" />
      </div>

      <div className="bg-white p-4 border rounded w-full">
        <Counter />
      </div>
      <div className="bg-white p-4 border rounded w-full">
        <Form />
      </div>
      <div className="bg-white p-4 border rounded w-full">
        <Timer />
      </div>
      
    </div>
  );
}
