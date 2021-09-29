import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Checklist } from "./Components/Checklist/Checklist";
import { Store } from "./redux/store";
import { checklistReducer } from "./state/checklistReducer";

const store = new Store({ checklist: checklistReducer });
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
      <Checklist name="React Redux training" items={[]}></Checklist>
      <input type="text" onChange={(e) => handleChange(e)} value={newItem} />
      <input type="button" value="Add item" onClick={(e) => addItem()}></input>
    </div>
  );
}

export default App;
