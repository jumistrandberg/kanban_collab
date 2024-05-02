import { useSelector } from "react-redux";
import { FcReadingEbook } from "react-icons/fc";
import styles from "../styling/AssignedUsersDisplay.module.css";

const AssignedUsersDisplay = ({ isLargeView, task }) => {
  const users = useSelector((state) => state.allUsersReducer.users);
  const assignedUsers = task.assignedUsers;
  const usersToRender = users.filter((user) => assignedUsers.includes(user.id));

  const renderUsers = usersToRender.map((user) => (
    <div key={user.id} className={styles.renderedUser}>
      <FcReadingEbook
        title={user.userUserName}
        role="button"
        className={isLargeView ? styles.userAvatar : styles.userAvatarSmall}
        style={{ backgroundColor: user.userAvatarColor }}
      />
      {isLargeView ? (
        <p className={styles.userTitle}>{user.userUserName}</p>
      ) : null}
    </div>
  ));

  return (
    <div
      className={styles.displayMembers_div}
      style={{
        gap: isLargeView ? "0.8em" : "0.3em",
        marginLeft: isLargeView ? "0" : "auto",
      }}
    >
      {renderUsers}
    </div>
  );
};

export default AssignedUsersDisplay;
