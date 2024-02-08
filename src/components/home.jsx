import React, { useCallback, useState } from "react";
import List from "./List";

function Home() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number, number * 2, number * 3];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div>
      <h1>Home</h1>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !dark)}> Change Theme </button>
        <List getItems={getItem} />
      </div>
    </div>
  );
}

export default Home;
