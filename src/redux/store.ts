import { Action } from "./action.model";

export class Store {
  reducers: { [key: string]: Function };
  state: { [key: string]: any };
  subscribers: Function[];

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = initialState;
    this.subscribers = [];
  }

  get value() {
    return this.state;
  }

  dispatch(action: Action) {
    console.log(action);
    this.state = {
      ...this.state,
      checklist: {
        ...this.state.checklist,
        items: [...this.state.checklist.items, action.payload],
      },
    };
    console.log(this.value);
  }
}
