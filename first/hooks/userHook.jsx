import { useContext } from "react";
import { UserContext } from "../context/userContext";

function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Unable to locate user context. Ensure UserProvider wraps the app.");
  }

  return context;
}

export default useUser;
