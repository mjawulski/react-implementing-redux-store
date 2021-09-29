import { connect } from "../../redux/connect";
import { Checklist } from "./Checklist";

function mapStateToProps(state: any) {
  return {
    ...state.checklist,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    addItem: (label: string) => {
      dispatch({ type: "ADD_ITEM", payload: { label, isCompleted: false } });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
