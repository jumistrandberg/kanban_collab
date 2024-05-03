import { createSlice, nanoid } from "@reduxjs/toolkit";

const saveTasks = (tasks) => {
  localStorage.setItem("allTasks", JSON.stringify(tasks));
};

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
        assignedUsers: [],
        atColumnId: action.payload.atColumnId,
        filteredUsers: action.payload.filteredUsers,
      };

      state.tasks.push(newTask);
      saveTasks(state.tasks);
    },
    removeTask: (state, action) => {
      //obs! skicka bara hit id från tasken som payload
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasks(state.tasks);
    },
    changeTask: (state, action) => {
      //använd localState och skicka hit hela objektet som payload

      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

      saveTasks(state.tasks);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
      saveTasks(state.tasks);
    },
    updateTaskDetails: (state, action) => {
      const { id, title, description } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
        saveTasks(state.tasks);
      }
    },
    setFilteredUsers: (state, action) => {
      state.tasks.forEach((task) => {
        task.filteredUsers = action.payload;
      });
      saveTasks(state.tasks);
    },
  },
});

export const {
  addTask,
  removeTask,
  changeTask,
  setFilteredUsers,
  setTasks,
  updateTaskDetails,
} = taskSlice.actions;

export default taskSlice.reducer;
