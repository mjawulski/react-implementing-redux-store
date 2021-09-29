import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Checklist } from "./Components/Checklist/Checklist";
import { Store } from "./redux/store";

const store = new Store(
  {},
  {
    checklist: {
      name: "React training",
      items: [{ label: "item1", completed: false }],
    },
  }
);
console.log(store.value);

function App() {
  const [newItem, setNewItem] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewItem(e.target.value);
  }

  function addItem() {
    const payload = { label: newItem, completed: false };
    store.dispatch({
      type: "ADD_ITEM",
      payload,
    });
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
