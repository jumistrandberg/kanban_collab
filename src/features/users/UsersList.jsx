import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styling/UsersList.module.css"
import { FcReadingEbook } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { changeActiveUser } from "../users/usersSlice";




const UsersList = () => {

    const dispatch = useDispatch();


    const users = useSelector((state) => state.allUsersReducer.users);
    const renderUsers = users.map(user => (
        <div key={user.id} className={styles.user}>

            {!user.userActive && <FcReadingEbook 
                role="button" 
                onClick={() => dispatch(changeActiveUser({id: user.id}))} 
                className={styles.userAvatar} 
                style={{'backgroundColor': user.userAvatarColor}}
            />}
            {user.userActive && <FcPortraitMode 
                role="button" 
                onClick={() => dispatch(changeActiveUser({id: user.id}))} 
                className={styles.userAvatar} 
                style={{'backgroundColor': user.userAvatarColor}}
            />}
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