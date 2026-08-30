import {createContext,useState,useEffect} from 'react';
import {account} from '../lib/appwrite';
import {ID} from 'react-native-appwite'
export const UserContext = createContext(null);


export const UserProvider = ({children}) => {
    const [user,setUser] = useState();
    const register = async(email,password) => {
        try {
            await account.create(ID.unique,email,password);
            logIn();
        } catch (error) {
            console.log(error);
            
        }
    }

    const logIn = async (email,password) => {
        try {
            await account.createEmailPasswordSession(email,password);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            console.log(error);
        }
    }

    const signOut = () => {

    }

    return (
        <UserContext.Provider value={{user,register,logIn,signOut}}>
            {children}
        </UserContext.Provider>

    )
}