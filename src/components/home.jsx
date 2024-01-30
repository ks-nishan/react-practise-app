import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h1><span style={{color: props.greeting.color}}>{props.greeting.text}</span> Home</h1>
      <p>{props.user}</p>
    </div>
  );
}

export default Home;
