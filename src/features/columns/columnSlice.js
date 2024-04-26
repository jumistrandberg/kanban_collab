import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialColumns = () => {
  const storedColumns = JSON.parse(localStorage.getItem("allColumns"));
  if (storedColumns) {
    return storedColumns;
  } else {
    const defaultColumns = [
      { title: "Todo", id: nanoid(), atBoardIndex: 0 },
      { title: "Doing", id: nanoid(), atBoardIndex: 0 },
      { title: "Done", id: nanoid(), atBoardIndex: 0 },
    ];
    localStorage.setItem("allColumns", JSON.stringify(defaultColumns));
    return defaultColumns;
  }
};

const initialState = {
  columns: getInitialColumns(),
};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addColumn: (state, action) => {
      const newColumn = {
        title: action.payload.title,
        id: nanoid(),
        atBoardIndex: action.payload.atBoardIndex,
      };

      state.columns.push(newColumn);
      localStorage.setItem("allColumns", JSON.stringify(state.columns));
    },
    removeColumn: (state, action) => {
      //obs! skicka bara hit id från tasken som payload
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
      localStorage.setItem("allColumns", JSON.stringify(state.columns));
    },
    changeColumn: (state, action) => {
      //använd localState och skicka hit hela objektet som payload
      state.columns = state.columns.map((column) =>
        column.id === action.payload.id ? action.payload : column
      );
    },
  },
});

export const { addColumn, removeColumn, changeColumn } = columnSlice.actions;

export default columnSlice.reducer;
