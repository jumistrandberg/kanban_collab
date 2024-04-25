import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { selectAllUsers } from "./usersSlice";


const UsersList = () => {
    //const users = useSelector(selectAllUsers)

    const users = useSelector((state) => state.allUsersReducer.users);
    console.log(users)
    const renderUsers = users.map(user => (
        <div key={user.id}>
            <FaUser role="button" />
            <p>{user.userUserName}</p>
        </div>
    ))


    return (
        <>
            {renderUsers}
        </>
        
    )
}

export default UsersList