export interface Checklist {
  name: string;
  items?: ChecklistItem;
}

export interface ChecklistItem {
  label: string;
  isCompleted: boolean;
}
