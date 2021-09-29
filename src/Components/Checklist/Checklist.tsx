import { useState, ChangeEvent, Key } from "react";
import { Checklist as ChecklistModel } from "../../models/checklist.model";
import { ChecklistItem } from "./ChecklistItem";

export function Checklist(props: any) {
  const [newItem, setNewItem] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewItem(e.target.value);
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        {props.items.map(
          (
            item: { label: string; isCompleted: boolean },
            index: Key | null | undefined
          ) => (
            <ChecklistItem
              label={item.label}
              isCompleted={item.isCompleted}
              key={index}
            />
          )
        )}
      </ul>
      <input type="text" onChange={(e) => handleChange(e)} value={newItem} />
      <input
        type="button"
        value="Add item"
        onClick={(e) => props.addItem(newItem)}
      ></input>
    </div>
  );
}
