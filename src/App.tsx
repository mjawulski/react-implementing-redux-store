import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Checklist } from "./Components/Checklist/Checklist";

function App() {
  const [newItem, setNewItem] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewItem(e.target.value);
  }

  function addItem() {
    console.log(newItem);
    setNewItem("");
  }

  return (
    <div>
      <Checklist name="React Redux training"></Checklist>
      <input type="text" onChange={(e) => handleChange(e)} value={newItem} />
      <input type="button" value="Add item" onClick={(e) => addItem()}></input>
    </div>
  );
}

export default App;
