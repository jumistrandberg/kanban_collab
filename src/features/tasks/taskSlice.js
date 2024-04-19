import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("allTasks")) || [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        title: action.payload.title,
        id: nanoid(),
        text: "",
        doDate: "",
        deadline: "",
        assignedUsers: "",
        atColumnId: action.payload.atColumnId,
        // atColumnIndex: action.payload.atColumnIndex,
      };

      state.tasks.push(newTask);
      localStorage.setItem("allTasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      //obs! skicka bara hit id från tasken som payload
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("allTasks", JSON.stringify(state.tasks));
    },
    changeTask: (state, action) => {
      //använd localState och skicka hit hela objektet som payload

      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem("allTasks", JSON.stringify(state.tasks));
    },
    updateTaskDetails: (state, action) => {
      const { id, title, description } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
        localStorage.setItem("allTasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, removeTask, changeTask, updateTaskDetails } =
  taskSlice.actions;

export default taskSlice.reducer;
