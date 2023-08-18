import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: ListGroupProps) {
  // Component State Hook destructure [index, func]
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

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
              onSelect(item);
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
