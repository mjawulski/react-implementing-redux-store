import { useEffect, useState } from "react";

export function ConnectedComponent(props: any) {
  const { store, Component, mapStateToProps, mapDispatchToProps, parentProps } =
    props;

  const [reduxState, setReduxState] = useState(store?.value);

  useEffect(() => {
    store?.subscribe((state: any) => {
      setReduxState(state);
    });
  });
  return (
    <Component
      {...parentProps}
      {...mapStateToProps(reduxState)}
      {...mapDispatchToProps(store?.dispatch.bind(store))}
    />
  );
}
