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
        atColumnIndex: action.payload.atColumnIndex,
      };

      state.tasks.push(newTask);
      localStorage.setItem("allTasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      //obs! skicka bara hit id från tasken som payload
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeTask: (state, action) => {
      //använd localState och skicka hit hela objektet som payload
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});

// const initialState = {
//     todos: [{ id: 1, text: "Vattna blommor" }],
//   };

// export const todoSlice = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//       addTodo: (state, action) => {
//         const todo = {
//           id: nanoid(),
//           text: action.payload,
//         };
//         //immer biblioteket i bakgrunden löser immutable-biten därav ok att köra push
//         state.todos.push(todo);
//       },
//       removeTodo: (state, action) => {
//         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//       },
//     },
//   });

export const { addTask, removeTask, changeTask } = taskSlice.actions;

export default taskSlice.reducer;
