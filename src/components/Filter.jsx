import { useDispatch, useSelector } from "react-redux";
import { setFilteredUsers } from "../features/tasks/taskSlice";
import styles from "../styling/Filter.module.css";
import { FcReadingEbook } from "react-icons/fc";

const Filter = () => {
  const users = useSelector((state) => state.allUsersReducer.users);
  const tasks = useSelector((state) => state.allTaskReducer.tasks);
  const dispatch = useDispatch();

  const handleFilterUsers = (userId) => {
    let newFilteredUsers;
    if (!tasks || tasks.length === 0) {
      newFilteredUsers = [userId];
    } else {
      const task = tasks[0];
      const filteredUsers = task.filteredUsers || [];

      const isUserChecked = filteredUsers.includes(userId);

      if (isUserChecked) {
        newFilteredUsers = filteredUsers.filter(
          (filteredUser) => filteredUser !== userId
        );
      } else {
        newFilteredUsers = [...filteredUsers, userId];
      }
    }
    console.log(newFilteredUsers);
    dispatch(setFilteredUsers(newFilteredUsers));
  };

  //filteredUsers is the same for all tasks and therefore can tasks[0] be used
  const checkFilteredUsers = (userId) => {
    return tasks[0].filteredUsers.includes(userId);
  };

  return (
    <div className={styles.members_popup}>
      <ul className={styles.members_ul}>
        {users.map((user) => (
          <li key={user.id} className={styles.members_li}>
            <label htmlFor={`assignedUser${user.id}`} className={styles.label}>
              <FcReadingEbook
                role="button"
                className={styles.userAvatar}
                style={{ backgroundColor: user.userAvatarColor }}
              />
              <p className={styles.userTitle}>{user.userUserName}</p>
            </label>
            <input
              type="checkbox"
              name="assignedUser"
              id={`assignedUser${user.id}`}
              checked={checkFilteredUsers(user.id)}
              onChange={(e) => handleFilterUsers(user.id)}
            />
          </li>
        ))}
      </ul>
      <button
        className={styles.resetBtn}
        onClick={() => dispatch(setFilteredUsers([]))}
      >
        Unselect All
      </button>
    </div>
  );
};

export default Filter;
