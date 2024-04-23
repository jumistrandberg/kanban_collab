import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: JSON.parse(localStorage.getItem("allUsers")) || [
        { id: nanoid(), userFirstName: "Jake", userLastName: "Jorden", userUserName: "Jesper", userAvatarColor: "#2d3436", userActive: false }, 
        { id: nanoid(), userFirstName: "Parham", userLastName: "Pour", userUserName: "Kai", userAvatarColor: "#6ab048", userActive: false },
        { id: nanoid(), userFirstName: "Lloyd", userLastName: "Kampner", userUserName: "Nya", userAvatarColor: "#f9ca24", userActive: false },
        { id: nanoid(), userFirstName: "Arvin", userLastName: "Johnsson", userUserName: "Sora", userAvatarColor: "#4834d4", userActive: false },
    ],
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            const newUser = {
                id: nanoid(),
                userFirstName: action.payload.userFirstName,
                userLastName: action.payload.userLastName,
                userUserName: action.payload.userUserName,
                userAvatarColor: action.payload.userUserName,
                userActive: action.payload, 
            }
            state.users.push(newUser)
            localStorage.setItem("allUsers", JSON.stringify(state.users))
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            )
            localStorage.setItem("allUsers", JSON.stringify(state.users))
        },
        modifyUser: (state, action) => {
            state.users = state.users.map((user) => 
                user.id === action.payload.id ? action.payload : user)
        }
    }
})

export const { addNewUser, removeUser, modifyUser } = userSlice.actions

export default userSlice.reducer