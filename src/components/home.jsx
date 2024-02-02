import React, { useEffect, useRef, useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h2>Home</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
      <p>Component rendered {renderCount.current} times</p>
    </div>
  );
}

export default Home;
