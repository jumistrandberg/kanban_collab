import { changeTask } from "../features/tasks/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styling/DateInput.module.css";

const DateInput = ({ dateType, task }) => {
  const dispatch = useDispatch();
  const reduxTasks = useSelector((state) => state.allTaskReducer.tasks);
  const reduxTask = reduxTasks.find((reduxTask) => task.id === reduxTask.id);

  console.log(reduxTasks);
  console.log(reduxTask);
  console.log(task.id);

  //   const [date, setDate] = useState("");

  const handleDateInput = (e) => {
    const dateInput = e.target.value;
    console.log(dateInput);
    // setDate(dateInput);
    dispatch(changeTask({ ...task, deadline: dateInput }));
  };

  //   useEffect(() => {
  //     dispatch(changeTask({ task, id: task.id, [dateType]: date }));
  //   }, [date]);

  return (
    <input
      className={styles.dateDisplay}
      type="date"
      //   name=""
      //   id=""
      //   value={date}
      value={reduxTask.deadline || ""}
      // onChange={(e) => setDate(e.target.value)}
      onChange={handleDateInput}
    />
  );
};

export default DateInput;
