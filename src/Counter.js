import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div id="counter-div">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
}
