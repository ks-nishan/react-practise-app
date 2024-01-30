import React, { useContext } from "react";
import userContext from "../contexts/userContext";

function Dashboard() {
  const value = useContext(userContext);
  const [user, setUser] = value;

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user)}</pre>
      <button
        onClick={() => {
          setUser({
            name : 'Nishanthan',
            role : 'Admin'
          });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Dashboard;
