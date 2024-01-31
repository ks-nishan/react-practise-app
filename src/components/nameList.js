import React from "react";
import Person from './person.jsx'

function nameList() {
  const persons = [
    {
      id: 1,
      name: "Nishanthan",
      age: 24,
      skill: "Developer",
    },
    {
      id: 2,
      name: "Mathy",
      age: 23,
      skill: "Analysist",
    },
    {
      id: 3,
      name: "Thusa",
      age: 22,
      skill: "UI/UX",
    },
  ];
  const personList = persons.map((person) => {
    return (
        <Person key={person.id} person={person}/>
    );
  });

  return <div>{personList}</div>;
}

export default nameList;
