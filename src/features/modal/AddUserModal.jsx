import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styling/AddUserModal.module.css"
import ColorSelector from "./ColorSelector";




const AddUserModal = ({ 
    handleConfirmAddUser,
    handleCloseAddUserWindow
}) => {

    const colors = ['#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab048', '#000', '#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab048', '#000', '#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab048', '#000', '#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab048', '#000']

    const showCurrentColor = (e) => {
        const currentColor = e.target.style.getPropertyValue('background-color')

        console.log(currentColor)
    }
  


  return (
    <>
        <div className={styles.modalContainer}>
            <div className={styles.addUserModal}>
                Add User
                <div className={styles.addUserModalInput}>
                    <label className={styles.addUserModalInputLabel}> 
                        First Name
                    </label>
                    <input 
                        type="text"
                        // onSubmit={() => handleUsers(user.id)}    
                    />
                    <label className={styles.addUserModalInputLabel}> 
                        Last Name
                    </label>
                    <input 
                        type="text"
                        // onSubmit={() => handleUsers(user.id)}    
                    />
                    <label className={styles.addUserModalInputLabel}> 
                        Username
                    </label>
                    <input 
                        type="text"
                        // onSubmit={() => handleUsers(user.id)}    
                    />
                </div>
                <div>
                    <label className={styles.addUserModalColorLabel}>
                        Color
                    </label>
                    <div className={styles.addUserModalColorList}>
                        {colors.map((color, idx) => 
                            <ColorSelector 
                                color={color}
                                showCurrentColor={showCurrentColor}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.addUserModalButtonContainer}>
                    <button
                    onClick={handleConfirmAddUser}
                    className={styles.addUserModalButton}
                    >
                    Confirm
                    </button>
                    <button
                    onClick={handleCloseAddUserWindow}
                    className={styles.addUserModalButton}
                    >
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddUserModal