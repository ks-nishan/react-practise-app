import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [message, setMessage] = useState('Welcome');
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thanks for subscribe!!")}>Subscribe</button>
    </div>
  );
}

export default Home;
