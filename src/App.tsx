import React, { ChangeEvent, useState } from "react";
import "./App.css";
import Checklist from "./Components/Checklist/";
import { Provider } from "./redux/Provider";
import { Store } from "./redux/store";
import { checklistReducer } from "./state/checklistReducer";

const store = new Store({ checklist: checklistReducer });

function App() {
  return (
    <Provider store={store}>
      <div>
        <Checklist items={[]}></Checklist>
      </div>
    </Provider>
  );
}

export default App;
