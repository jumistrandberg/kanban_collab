import { changeTask } from "../features/tasks/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styling/DateInput.module.css";

const DateInput = ({ dateType, task }) => {
  const dispatch = useDispatch();
  const reduxTasks = useSelector((state) => state.allTaskReducer.tasks);
  const reduxTask = reduxTasks.find((reduxTask) => task.id === reduxTask.id);

  console.log(reduxTasks);
  console.log(reduxTask);

  const handleDateInput = (e) => {
    const dateInput = e.target.value;
    if (
      dateType === "deadline" &&
      new Date(e.target.value) < new Date(reduxTask.doDate)
    ) {
      alert("Deadline can not be set before doDate");
      return;
    } else if (
      dateType === "doDate" &&
      new Date(e.target.value) > new Date(reduxTask.deadline)
    ) {
      alert("DoDate can not be set after deadline");
      return;
    }
    console.log(dateInput);
    dispatch(changeTask({ ...task, [dateType]: dateInput }));
  };

  return (
    <input
      className={styles.dateDisplay}
      type="date"
      value={reduxTask[dateType] || ""}
      onChange={handleDateInput}
    />
  );
};

export default DateInput;
