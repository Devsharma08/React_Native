import { Text } from "react-native";
import { useRouter } from "expo-router";
import useUser from "../../hooks/userHook";
import {useEffect} from 'react';
import ThemedLoader from '../../components/ThemedLoader';

const AuthOnly = ({ children }) => {
  const { user, isAuthChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthChecked && user) {
      router.replace("/profile");
    }
  }, [user, isAuthChecked, router]);

  if (!isAuthChecked) {
    return <ThemedLoader/> ;
  }

  if (user) {
    return null;
  }

  return <>{children}</>;
};

export default AuthOnly;

