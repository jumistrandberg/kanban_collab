import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { FcReadingEbook } from "react-icons/fc";
import styles from "../styling/MembersInput.module.css";

const MembersInput = ({ handleCloseMember }) => {
  const users = useSelector((state) => state.allUsersReducer.users);

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
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersInput;
