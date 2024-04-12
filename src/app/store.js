import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import columnReducer from "../features/columns/columnSlice";

export default configureStore({
  reducer: {
    allTaskReducer: taskReducer,
    allColumnReducer: columnReducer,
  },
});
