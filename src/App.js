import React from "react";
import "./App.css";
import Counter from "./Counter";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is TDD counter App</h1>
        <Button label={"Click Me!"} />
      </header>
      <Counter />
    </div>
  );
}

export default App;
