import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../users/usersSlice";
import styles from "../../styling/AddUserModal.module.css"




const AddUserModal = ({ handleCloseAddUserWindow }) => {
        
        const dispatch = useDispatch()

        const [newFirstName, setNewFirstName] = useState('')
        const [newLastName, setNewLastName] = useState('')
        const [newUserName, setNewUserName] = useState('')
        const [newAvatarColor, setNewAvatarColor] = useState('#8f999c')

        const onFirstNameChange = e => setNewFirstName(e.target.value)
        const onLastNameChange = e => setNewLastName(e.target.value)
        const onUserNameChange = e => setNewUserName(e.target.value)
        const onAvatarColorChange = e => setNewAvatarColor(e.target.value)
        
        const canSave = Boolean(newUserName)

        const handleSaveUser = (e) => {
            e.preventDefault()
            const sendUser = {
                userFirstName: newFirstName,
                userLastName: newLastName,
                userUserName: newUserName,
                userAvatarColor: newAvatarColor
            }
            dispatch(addNewUser(sendUser))
            setNewFirstName('')
            setNewLastName('')
            setNewUserName('')
            handleCloseAddUserWindow()
        }
        


        return (
            <>
                <div className={styles.modalContainer}>
                    <div className={styles.addUserModal}>
                        <section className={styles.addUserModalSection}>
                            <h3 className={styles.addUserModalSectionTitle}>Add User</h3>
                            <form onSubmit={handleSaveUser}     className={styles.userForm}>
                                <label htmlFor="userFirstName" className={styles.userFormInputLabel}>First Name</label>
                                <input 
                                    className={styles.userFormInput}
                                    type="text" 
                                    id="userFirstName"
                                    name="userFirstName"
                                    value={newFirstName}
                                    onChange={onFirstNameChange}
                                />
                                <label htmlFor="userLastName" className={styles.userFormInputLabel}>Last Name</label>
                                <input 
                                    className={styles.userFormInput}
                                    type="text" 
                                    id="userLastName"
                                    name="userLastName"
                                    value={newLastName}
                                    onChange={onLastNameChange}
                                />
                                <label htmlFor="userUserName" className={styles.userFormInputLabel}>User Name</label>
                                <input 
                                    className={styles.userFormInput}
                                    type="text" 
                                    id="userUserName"
                                    name="userUserName"
                                    value={newUserName}
                                    onChange={onUserNameChange}
                                />
                                <label htmlFor="chooseColor" className={styles.userFormInputLabel}>Avatar Color</label>
                                    <input 
                                        className={styles.userFormInputColor}
                                        type="color" 
                                        id="chooseColor"
                                        name="chooseColor"
                                        value={newAvatarColor}
                                        onChange={onAvatarColorChange}
                                    />
                                <div className={styles.addUserModalButtonContainer}>
                                    <button
                                        onClick={handleSaveUser}
                                        className={styles.addUserModalButton}
                                        disabled={!canSave}
                                    >Confirm</button>
                                    <button
                                        onClick={handleCloseAddUserWindow}
                                        className={styles.addUserModalButton}
                                    >Cancel</button>
                                </div>
                            </form>
                        </section>
                        
                    </div>
                </div>
            </>
        )
    }

export default AddUserModal