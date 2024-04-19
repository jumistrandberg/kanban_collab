import React from "react";
import { useDispatch, useSelector } from "react-redux";
const ColumnDropdownSelector = ({ defaultColumnId }) => {
  const columns = useSelector((state) => state.allColumnReducer.columns);
  const defaultColumn = columns.find((column) => column.id == defaultColumnId);

  const dispatch = useDispatch();

  return (
    <select name="columns">
      <option value={defaultColumn.title}>{defaultColumn.title}</option>
      {columns.map((column) =>
        column.id !== defaultColumn.id ? (
          <option value={column.title} key={`${column.id}dropDownSelector`}>
            {column.title}
          </option>
        ) : null
      )}
    </select>
  );
};

export default ColumnDropdownSelector;
