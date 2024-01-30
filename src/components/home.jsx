import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h1><span style={{color: props.greeting.color}}>{props.greeting.text}</span> Home</h1>
    </div>
  );
}

export default Home;
