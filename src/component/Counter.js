import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState("");

  return (
    <div>
      <label htmlFor="countStart">Initialisation du compteur: </label>
      <input
        type="text"
        id="countStart"
        name="countStart"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <p>Le compteur est à: {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
