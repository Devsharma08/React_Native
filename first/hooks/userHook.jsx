import { useContext } from "react";
import { userProvider } from "../context/userContext";

function useUser() {
  const user = useContext(userProvider);
  if (!user) new Error("Unable to locate user please try again");
  return user;
}

export default useUser;
