import React from "react";
import { Store } from "./store";

export const ReduxContext = React.createContext<Store | null>(null);

export const Provider = ({
  store,
  children,
}: {
  store: any;
  children: any;
}) => <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>;
