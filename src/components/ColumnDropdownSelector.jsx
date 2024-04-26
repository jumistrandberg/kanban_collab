import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTask } from "../features/tasks/taskSlice";
const ColumnDropdownSelector = ({ task }) => {
  //gets the initial columnId to create to correct options
  const defaultColumnId = task.atColumnId;
  const columns = useSelector((state) => state.allColumnReducer.columns);
  const defaultColumn = columns.find((column) => column.id == defaultColumnId);

  //a local state copy of the task
  const [updatedTask, setUpdatedTask] = useState(task);
  const dispatch = useDispatch();

  //change the column in the task to the new column
  const handleSelection = (e) => {
    setUpdatedTask((prev) => ({ ...prev, atColumnId: e.target.value }));
  };
  //sends changes the column with the task reducer when the updateTasks changes
  useEffect(() => {
    dispatch(changeTask(updatedTask));
  }, [updatedTask]);

  return (
    <select
      className="moveTaskDropDown"
      onChange={handleSelection}
      name="columns"
    >
      <option className="moveTaskOption" value={defaultColumn.id}>
        {defaultColumn.title}
      </option>
      {columns.map((column) =>
        column.id !== defaultColumn.id ? (
          <option
            className="moveTaskOption"
            value={column.id}
            key={`${column.id}dropDownSelector`}
          >
            {column.title}
          </option>
        ) : null
      )}
    </select>
  );
};

export default ColumnDropdownSelector;
