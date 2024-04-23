import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../features/users/usersSlice";
import { CiCirclePlus } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import styles from '../styling/Users.module.css'

const AddUsers = () => {

    const dispatch = useDispatch()

    const [newFirstName, setNewFirstNAme] = useState('')
    const [newLasttName, setNewLasttNAme] = useState('')
    const [newUserName, setNewUserNAme] = useState('')
    const [newUserColor, setNewUserColor] = useState('#fff')
    const [newUserActive, setNewUserActive] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        const pushUser = {
            userFirstName: newFirstName,
            userLastName: newLasttName,
            userUserName: newUserName,
            userAvatarColor: newUserColor,
            userActive: newUserActive,
        }
    }

  return (
    <RxAvatar className={styles.activeUser} role="button"/>
  )
}

export default AddUsers