import React, { useEffect, useRef, useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focus = () =>{
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Home</h2>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default Home;
