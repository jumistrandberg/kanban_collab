import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { selectAllUsers } from "./usersSlice";
import styles from "../../styling/UsersList.module.css"
import { FcPortraitMode } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";




const UsersList = () => {
    //const users = useSelector(selectAllUsers)

    const users = useSelector((state) => state.allUsersReducer.users);
    console.log(users)
    const renderUsers = users.map(user => (
        <div key={user.id} className={styles.user}>
            <FcReadingEbook role="button" className={styles.userAvatar}/>
            <p className={styles.userTitle}>{user.userUserName}</p>
        </div>
    ))


    return (
        <>
            {renderUsers}
        </>
        
    )
}

export default UsersList