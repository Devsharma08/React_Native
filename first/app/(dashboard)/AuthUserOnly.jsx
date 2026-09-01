import { Text } from "react-native";
import { useRouter } from "expo-router";
import useUser from "../../hooks/userHook";
import {useEffect} from 'react';
import ThemedLoader from '../../components/ThemedLoader';

const UserOnly = ({ children }) => {
  const { user, isAuthChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthChecked && user === null) {
      router.replace("/login");
    }
  }, [user, isAuthChecked, router]);

  if (!isAuthChecked) {
    return <ThemedLoader/>;
  }

  if (user === null) {
    return null;
  }

  return <>{children}</>;
};

export default UserOnly;

