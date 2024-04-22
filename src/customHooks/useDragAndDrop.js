import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setTasks } from "../features/tasks/taskSlice";
import styles from "../styling/Column.module.css";
export default function useDragAndDrop(column) {
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [columnId, setColumnId] = useState(column);
  // set data to be moved in drag and drop
  const handleDragStart = (e, tasks) => {
    e.dataTransfer.setData("taskId", tasks.id);
  };

  // function for dropping cards in other columns
  const handleDragEnd = (e) => {
    e.preventDefault();

    // get the data that is moved
    const taskId = e.dataTransfer.getData("taskId");

    // reset active state and clear drop indicators
    setActive(false);
    clearHighlights();

    //function to get indicators for were to drop tasks
    const indicators = getIndicators();

    //function to find nearest indicator for were task can be dropped
    const nearestIndicator = getNearestIndicator(e, indicators);
    const element = nearestIndicator.element;

    // get the target column from the indicator
    const targetColumn = element.dataset.column;

    // get id for task below indicator
    const before = element.dataset.before || "-1";

    // check if the dropped position is different from the original position
    if (before !== taskId) {
      // copy the tasks array
      let copy = [...tasks];

      // find the task to transfer in the copied array
      let taskToTransfer = copy.find((task) => task.id === taskId);
      if (!taskToTransfer) return;
      // Update the columnId of the task being transferred
      taskToTransfer = { ...taskToTransfer, atColumnId: targetColumn };
      // Remove the task from its original position
      copy = copy.filter((task) => task.id !== taskId);
      // Check if the task is moved to the end of the column
      const moveToBack = before === "-1";

      // put task in new position
      if (moveToBack) {
        // if dropped at the end of column
        copy.push(taskToTransfer);
      } else {
        // else, find the right index
        const insertAtIndex = copy.findIndex((task) => task.id === before);
        if (insertAtIndex === undefined) return;
        // put task at the right index
        copy.splice(insertAtIndex, 0, taskToTransfer);
      }
      // update the tasks array in the Redux store
      dispatch(setTasks(copy));
    }
  };

  // function to handle drag over, highlight nearest indicator and active column
  const handleDragOver = (e, column) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
    setColumnId(column);
  };

  // clear highlights on drop indicators
  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    // set opacity to 0 for each indicator
    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  // function to highlight the nearest indicator
  const highlightIndicator = (e) => {
    // get all indicators
    const indicators = getIndicators();
    // clear hightlight
    clearHighlights(indicators);
    // find nearest indicator and highlight it
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    // Offset value to allow some margin for the drag-and-drop operation so the user don't have to drop the task exactly in the right place
    const DISTANCE_OFFSET = 50;

    // Reduce function that loops through the indicators to find the one closest to the pointer
    const el = indicators.reduce(
      // Arrow function called for each indicator element in the list
      (closest, indicatorElement) => {
        // Retrieve the position and dimensions of the indicator element
        const indicatorBounds = indicatorElement.getBoundingClientRect();

        // Calculate the vertical distance between the pointer and the indicator element
        const offset = e.clientY - (indicatorBounds.top + DISTANCE_OFFSET);

        // Offset < 0 means that pointer is above the indicator, since y-value decreases when moving up the screen.
        // If offset is negative && greater than the previously closest distance,
        // then the current indicator is closer to the pointer than the previous closest one.
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: indicatorElement };
        } else {
          return closest;
        }
      },
      {
        //Initial offset set so that any following offset will be closer
        offset: Number.NEGATIVE_INFINITY,
        // Initial closest indicator is the last one in the list
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  //function to get an array with all elements with the attribut data-column and the value of columnId
  const getIndicators = () => {
    console.log(
      Array.from(document.querySelectorAll(`[data-column="${columnId}"]`))
    );
    return Array.from(document.querySelectorAll(`[data-column="${columnId}"]`));
  };

  // function to handle drag leave
  const handleDragLeave = () => {
    // clear highlights on indicators and the active column when dragging away from it
    clearHighlights();
    setActive(false);
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    getIndicators,
  };
}
