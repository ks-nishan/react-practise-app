import React from "react";

function person({person}) {
  return (
    <div>
      <p>
        I am {person.name}. I am {person.age} and i Know {person.skill}
      </p>
    </div>
  );
}

export default person;
