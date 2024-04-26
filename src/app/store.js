import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import columnReducer from "../features/columns/columnSlice";
import usersReducer from "../features/users/usersSlice"

export default configureStore({
  reducer: {
    allTaskReducer: taskReducer,
    allColumnReducer: columnReducer,
    allUsersReducer: usersReducer,
  },
});
