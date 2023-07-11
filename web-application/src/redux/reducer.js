import { createStore } from "redux";

function userReducer(state = { studentID: "" }, action) {
  switch (action.type) {
    case "studentID/insert":
      return { studentID: action.payload };
    default:
      return state;
  }
}

let store = createStore(userReducer);

export default store;
