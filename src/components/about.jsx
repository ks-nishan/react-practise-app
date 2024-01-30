import React from "react";
import { useContext } from "react";
import { userContext, useUserContext}  from "../contexts/userContext";

function About() {
  const value = useUserContext();
  const [user, setUser] = value;

  return (
    <div>
      <h1>About</h1>
      {/* <h6>{value}</h6> */}
      <pre>{JSON.stringify(user)}</pre>
      <button onClick={() => {
            setUser({
                name : 'Mathyvathana',
                role : 'Admin'
            });
        }}>Login</button>
    </div>
  );
}

export default About;
