import { useSelector } from "react-redux";

export function MessageDisplay() {
  const count = useSelector((state) => state.counter.value);

  let message;
  if (count > 10) {
    message = "Counter value is high";
  } else if (count < 0) {
    message = "Counter value is negative";
  } else {
    message = "Keep counting";
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
