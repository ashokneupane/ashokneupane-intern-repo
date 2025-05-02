/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Button from "./components/Button";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}> Click Me </Button>
      <p>You have click {count} times</p>
    </>
  );
}
export default Counter;
