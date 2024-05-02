import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useActiveUser() {
  const activeUser = useSelector((state) =>
    state.allUsersReducer.users.find((u) => u.userActive)
  );
  console.log(activeUser);
  return activeUser;
}
