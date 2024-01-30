import React, { useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Home</h1>
      {/* <h2>Welcome Nishanthan!</h2>
      <h2>Welcome Guest!!</h2> */}
      {isLoggedIn ? <h2>Welcome Nishanthan!</h2> : <h2>Welcome Guest!!</h2>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
    </div>
  );
}

export default Home;
