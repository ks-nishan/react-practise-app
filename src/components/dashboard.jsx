import React, { useEffect, useRef, useState } from 'react';

function Dashboard() {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name
  }, [name]);


    return (
      <div>
        <h1>Dashboard</h1>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <p>My name is <span style={{color: 'red'}}>{name}</span> and my previous name is <span style={{color: 'blue'}}>{prevName.current}</span></p>
      </div>
    );
  } 
  
  export default Dashboard;
  