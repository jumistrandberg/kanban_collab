import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FcReadingEbook } from "react-icons/fc";
import styles from "../styling/MembersInput.module.css";
import { changeTask } from "../features/tasks/taskSlice";

const MembersInput = ({ handleCloseMember, task }) => {
  const users = useSelector((state) => state.allUsersReducer.users);
  const dispatch = useDispatch();

  const handleAssignUser = (userId) => {
    const isUserAssigned = task.assignedUsers.includes(userId);
    let updatedAssignedUsers;

    if (isUserAssigned) {
      updatedAssignedUsers = task.assignedUsers.filter((id) => id !== userId);
    } else {
      updatedAssignedUsers = [...task.assignedUsers, userId];
    }
    const updatedTask = { ...task, assignedUsers: updatedAssignedUsers };
    dispatch(changeTask(updatedTask));
  };

  const checkAssigned = (userId) => {
    return task.assignedUsers.includes(userId);
  };

  return (
    <div className={styles.members_popup}>
      <h5 className={styles.title}>Members</h5>
      <MdClose
        role="button"
        className={styles.close}
        onClick={handleCloseMember}
        aria-label="Close"
      />
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
              checked={checkAssigned(user.id)}
              onChange={(e) => handleAssignUser(user.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersInput;
