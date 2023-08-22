import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NY", "Berlin", "London", "Chicago", "Fargo", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cool Cities"
        onSelect={handleSelectItem}
      />

      <Alert />
    </div>
  );
}

export default App;
