import React, { useState } from "react";

function Counter() {
  const [start, setStart] = useState(6);
  const [count, setCount] = useState(start);

  return (
    <div>
      <label htmlFor="count">Initialisation du compteur: </label>
      <input
        type="text"
        id="count"
        name="count"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <p>Le compteur est à: {count} </p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
