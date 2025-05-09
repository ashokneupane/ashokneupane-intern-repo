import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Set up an interval to increment time every second
    const intervalId = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000,
    );

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []); // Run only once when the component mounts and clean up on unmount

  return <div>Time: {time}</div>;
}

export default Timer;
