import { Checklist } from "../models/checklist.model";
import { Action } from "../redux/action.model";

const initialState = {
  name: "React training",
  items: [
    { label: "item1", isCompleted: false },
    { label: "item1", isCompleted: false },
    { label: "item1", isCompleted: false },
    { label: "item1", isCompleted: false },
  ],
};

export function checklistReducer(
  state: Checklist = initialState,
  action: Action
): Checklist {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
  }
  return state;
}
