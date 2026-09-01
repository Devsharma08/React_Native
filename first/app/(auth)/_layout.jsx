import { Stack } from "expo-router";
import { StatusBar} from 'expo-status-bar'; 
import AuthOnly from './AuthOnly';

const Layout = () => {
  return (
    <AuthOnly>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown : false , animation : "none" }} />
    </AuthOnly>
  );
};

export default Layout;
