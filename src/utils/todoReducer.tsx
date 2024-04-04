import { useReducer } from "react";

export const TodoReducer = () => {
  const initialState = {
    todoItems: [],
  };
  const actionTypes = {
    ADD: "ADD",
    DOING: "DOING",
    DONE: "DONE",
    REMOVE: "REMOVE",
  };
  function reducer(state: object, action: { type: string }) {
    switch (action.type) {
      case actionTypes.ADD:
        return {};
      case actionTypes.DOING:
        return {};
      case actionTypes.DONE:
        return {};
      case actionTypes.REMOVE:
        return {};
      default:
        return state;
    }
  }
};
