import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialUsers = () => {
  const storedUsers = JSON.parse(localStorage.getItem("allUsers"));
  if (storedUsers) {
    return storedUsers;
  } else {
    const defaultUsers = 
      [
        { id: nanoid(), userFirstName: "Jake", userLastName: "Jorden", userUserName: "Jesper", userAvatarColor: "#2d3436", userActive: false }, 
        { id: nanoid(), userFirstName: "Parham", userLastName: "Pour", userUserName: "Kai", userAvatarColor: "#6ab048", userActive: false },
        { id: nanoid(), userFirstName: "Lloyd", userLastName: "Kampner", userUserName: "Nya", userAvatarColor: "#f9ca24", userActive: false },
        { id: nanoid(), userFirstName: "Arvin", userLastName: "Johnsson", userUserName: "Sora", userAvatarColor: "#4834d4", userActive: false },
      
    ];
    localStorage.setItem("allUsers", JSON.stringify(defaultUsers));
    return defaultUsers;
  }
};
  
const initialState = {
  users: getInitialUsers(),
};

const saveUser = (user) => {
  localStorage.setItem("allUsers", JSON.stringify(user))
};  

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      const newUser = {
        id: nanoid(),
        userFirstName: action.payload.userFirstName,
        userLastName: action.payload.userLastName,
        userUserName: action.payload.userUserName,
        userAvatarColor: action.payload.userAvatarColor,
        userActive: false,
      }
        state.users.push(newUser)
        saveUser(state.users)
    },
    changeUserColor: (state, action) => {
      const newColor = {
        userAvatarColor: action.payload.userAvatarColor,
      }
      state.users.userAvatarColor.push(newColor)

    },
    changeActiveUser: (state, action) => {
      const { id } = action.payload
      const userToActive = state.users.find((user) => user.id === id)
      if(userToActive) {
        userToActive.userActive = !userToActive.userActive 
      } 
      saveUser(state.users)
    }  
    
  },
})

export const selectAllUsers = (state) => state.users

export const { addNewUser, changeActiveUser } = usersSlice.actions

export default usersSlice.reducer