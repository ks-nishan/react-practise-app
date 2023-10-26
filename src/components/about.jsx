import React from "react";
import { useContext } from "react";
import userContext from "../contexts/userContext";

function About() {
  const value = useContext(userContext);
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
