import React, { useState, useEffect } from "react";
import Counter from "./Component/Counter";

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setmessage] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setmessage("Count cannot go below 0");
    }
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    setmessage("")
    console.log("Count:", count);
  }, [count]);

  return (
    <div className="app-container">
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        message={message}
        reset={reset}
      />
    </div>
  );
};

export default App;
