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
          setUser({});
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
