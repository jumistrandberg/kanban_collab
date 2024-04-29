import { useSelector } from "react-redux";
import styles from "../../styling/UsersList.module.css";
import { FcReadingEbook } from "react-icons/fc";

const UsersList = () => {
  const users = useSelector((state) => state.allUsersReducer.users);
  console.log(users);
  const renderUsers = users.map((user) => (
    <div key={user.id} className={styles.user}>
      <FcReadingEbook
        role="button"
        className={styles.userAvatar}
        style={{ backgroundColor: user.userAvatarColor }}
      />
      <p className={styles.userTitle}>{user.userUserName}</p>
    </div>
  ));

  return <>{renderUsers}</>;
};

export default UsersList;
