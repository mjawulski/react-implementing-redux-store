import { ConnectedComponent } from "./ConnectedComponent";
import { ReduxContext } from "./Provider";

export function connect(
  mapStateToProps?: Function,
  mapDispatchToProps?: Function
) {
  return (Component: any) =>
    (props: any): JSX.Element => {
      return (
        <ReduxContext.Consumer>
          {(store) => (
            <ConnectedComponent
              store={store}
              mapStateToProps={mapStateToProps}
              mapDispatchToProps={mapDispatchToProps}
              Component={Component}
              parentProps={props}
            />
          )}
        </ReduxContext.Consumer>
      );
    };
}
