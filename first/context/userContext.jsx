import { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthChecked,setIsAuthChecked] = useState(false);

  const getInitUserData = async () => {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
    } finally {
      setIsAuthChecked(true);
    }
  };

  useEffect(() => {
   getInitUserData();
  }, []);

  const register = async (email, password) => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      await account.create(ID.unique(), email.trim(), password);
      const userData = await logIn(email.trim(), password);
      return userData;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      console.log("Register error:", err.message);
      throw err;
    }
  };

  const logIn = async (email, password) => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      await account.createEmailPasswordSession(email.trim(), password);
      const response = await account.get();
      setUser(response);
      return response;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      console.log("Login error:", err.message);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      console.log("logged out successfully ");
      setUser(null);
      return true;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      console.log("Sign out error:", err.message);
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{ user, register, logIn, signOut,isAuthChecked }}>
      {children}
    </UserContext.Provider>
  );
};
