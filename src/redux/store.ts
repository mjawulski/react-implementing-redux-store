import { Action } from "./action.model";

export class Store {
  reducers: { [key: string]: Function };
  state: { [key: string]: any };
  subscribers: Function[];

  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
    this.subscribers = [];
  }

  get value() {
    return this.state;
  }

  dispatch(action: Action) {
    console.log(action);
    this.state = this.reduce(this.state, action);
    console.log(this.value);
  }

  reduce(state: any, action: Action) {
    const newState: { [key: string]: any } = {};
    for (const prop in this.reducers) {
      if (Object.prototype.hasOwnProperty.call(this.reducers, prop)) {
        const reducer = this.reducers[prop];
        newState[prop] = reducer(state[prop], action);
      }
    }
    return newState;
  }
}
