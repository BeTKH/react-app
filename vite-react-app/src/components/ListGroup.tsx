function ListGroup() {
  let items = ["New York", "Berlin", "London", "Chicago", "Fargo", "Tokyo"];

  return (
    <>
      <h1>Lists</h1>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, indx) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, indx)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
