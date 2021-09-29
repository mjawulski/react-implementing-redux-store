import { Checklist as ChecklistModel } from "../../models/checklist.model";
import { ChecklistItem } from "./ChecklistItem";

export function Checklist(props: ChecklistModel) {
  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        <ChecklistItem label="Prepare material" isCompleted={true} />
        <ChecklistItem label="Prepare github repo" isCompleted={true} />
        <ChecklistItem label="Conduct training" isCompleted={true} />
        <ChecklistItem label="Get feedback" isCompleted={false} />
      </ul>
    </div>
  );
}
