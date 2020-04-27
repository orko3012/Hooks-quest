import React, { useState } from "react";

function Counter() {
  //const [start, setStart] = useState(0);
  const [count, setCount] = useState("");

  return (
    <div>
      <label htmlFor="count">Initialisation du compteur: </label>
      <input
        id="count"
        name="count"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <p>Le compteur est à: {count} </p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
