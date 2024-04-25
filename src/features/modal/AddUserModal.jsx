import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import styles from "../../styling/AddUserModal.module.css"




const AddUserModal = () => {
        
        const dispatch = useDispatch()

        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [userName, setuserName] = useState('')
        const [avatarColor, setAvatarColor] = useState('#8f999c')

        const onFirstNameChange = e => setFirstName(e.target.value)
        const onLastNameChange = e => setLastName(e.target.value)
        const onUserNameChange = e => setuserName(e.target.value)
        const onAvatarColorChange = e => setAvatarColor(e.target.value)
        
        const onSaveUser = () => {
            if (userName) {
                console.log(userName)
            }
        }


        return (
            <>
                <div className={styles.modalContainer}>
                    <div className={styles.addUserModal}>
                        <section className={styles.addUserModalSection}>
                            <h3 className={styles.addUserModalSectionTitle}>Add User</h3>
                            <form className={styles.userForm}>
                                <label htmlFor="userFirstName" className={styles.userFormInputLabel}>First Name</label>
                                <input 
                                    className={styles.userFormInput}
                                    type="text" 
                                    id="userFirstName"
                                    name="userFirstName"
                                    value={firstName}
                                    onChange={onFirstNameChange}
                                />
                                <label htmlFor="userLastName" className={styles.userFormInputLabel}>Last Name</label>
                                <input 
                                    className={styles.userFormInput}
                                    type="text" 
                                    id="userLastName"
                                    name="userLastName"
                                    value={lastName}
                                    onChange={onLastNameChange}
                                />
                                <label htmlFor="userUserName" className={styles.userFormInputLabel}>User Name</label>
                                <input 
                                    className={styles.userFormInput}
                                    type="text" 
                                    id="userUserName"
                                    name="userUserName"
                                    required
                                    value={userName}
                                    onChange={onUserNameChange}
                                />
                                <label htmlFor="chooseColor" className={styles.userFormInputLabel}>Avatar Color</label>
                                    <input 
                                        className={styles.userFormInputColor}
                                        type="color" 
                                        id="chooseColor"
                                        name="chooseColor"
                                        value={avatarColor}
                                    />
                                <div className={styles.addUserModalButtonContainer}>
                                    <button
                                        onClick={onSaveUser}
                                        className={styles.addUserModalButton}
                                    >Confirm</button>
                                    <button
                                        
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