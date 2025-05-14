import { useState, useMemo } from "react";

const slowFunction = (nums) => {
  console.log("Calculating...");
  return nums.reduce((acc, n) => acc + n * 1000, 0);
};

const NumberList = () => {
  const [count, setCount] = useState(0);
  const numbers =  useMemo(() => Array.from({ length: 100 }, (_, i) => i + 1),[]);

  const total = useMemo(() => slowFunction(numbers),[numbers]);

  return (
    <div>
      <h2>Total: {total}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default NumberList;