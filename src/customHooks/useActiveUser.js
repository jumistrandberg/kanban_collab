import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useActiveUser() {
  const allUsers = useSelector((user) => user.allUsersReducer.users);
  const activeUser = allUsers.find((user) => user.userActive);
  return activeUser;
}
