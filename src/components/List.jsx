import React, { useEffect, useState } from "react";

function List({getItems}) {
  const [items, setItem] = useState([]);

  useEffect(() => {
    setItem(getItems());
    console.log("Updating item");
  }, [getItems]);

  return (
    <div>
      <h2>List</h2>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default List;
