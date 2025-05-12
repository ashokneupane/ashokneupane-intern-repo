import React, { useState, useCallback, memo } from "react";

const ButtonUseCallback = ({ onClick }) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    onClick?.();
  }, [onClick]);

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Child Count ({count})
    </button>
  );
};

// Wrap the ButtonUseCallback component with React.memo to optimize re-rendering
const MemoizedButtonUseCallback = memo(ButtonUseCallback);

export default function App() {
  const [count, setCount] = useState(0);

  const handleChildClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Parent Count ({count})
      </button>
      <MemoizedButtonUseCallback onClick={handleChildClick} />
    </div>
  );
}
