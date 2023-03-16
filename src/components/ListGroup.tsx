import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: ListGroupProps) {
  items.sort();
  const [selected, setSelected] = useState(-0);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelected(index);
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
