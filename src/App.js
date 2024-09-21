import { BsTrash3 } from "react-icons/bs";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BsTrash3 className="inline-block align-top" style={{ color: 'red' }} />
        Hello World
      </h1>
    </div>
  );
}

export default App;
