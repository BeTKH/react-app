import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Berlin", "London", "Chicago", "Fargo", "Tokyo"];

  // State Hook destructure [index, func]
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const add = (a: number, b: number) => a + b;

  return (
    <>
      <h1>Lists</h1>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {/* render list dynamically - map over the list of items and 
        create a new li element for each item */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
