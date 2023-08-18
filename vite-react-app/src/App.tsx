import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NY", "Berlin", "London", "Chicago", "Fargo", "Tokyo"];

  return (
    <div>
      <ListGroup items={items} heading="Cool Cities" />
    </div>
  );
}

export default App;
