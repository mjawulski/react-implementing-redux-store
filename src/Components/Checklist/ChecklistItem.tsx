import { ChecklistItem as ChecklistItemModel } from "../../models/checklist.model";

export function ChecklistItem(props: ChecklistItemModel) {
  return (
    <li>
      <label>{props.label}</label>{" "}
      <input type="checkbox" checked={props.isCompleted} />
    </li>
  );
}
