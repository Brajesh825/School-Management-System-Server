import { createStore } from "redux";

function userReducer(state = { user: {} }, action) {
  switch (action.type) {
    case "admin/add":
      state.user.name = action.payload.name;
      state.user.role = action.payload.role;
      state.user.profilePic = action.payload.profilePic;
      state.user.email = action.payload.email;
      state.user.mobile = action.payload.mobile;
      return { state };
    case "student/add":
      state.user.name = action.payload.name;
      state.user.role = action.payload.role;
      state.user.profilePic = action.payload.profilePic;
      state.user.email = action.payload.email;
      state.user.studentID = action.payload.studentID
      return { state };
    default:
      return state;
  }
}

let store = createStore(userReducer);

export default store;
