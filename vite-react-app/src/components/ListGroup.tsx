function ListGroup() {
  let items = ["New York", "Berlin", "London", "Chicago", "Fargo", "Tokyo"];

  return (
    <>
      <h1>Lists</h1>

      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
