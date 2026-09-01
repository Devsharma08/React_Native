import { useColorScheme, StyleSheet } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from './AuthUserOnly';

const Layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? "light";
  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                color={focused ? theme.iconColorFocused : theme.iconColor}
                size={24}
                name={focused ? "book" : "book-outline"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                color={focused ? theme.iconColorFocused : theme.iconColor}
                size={24}
                name={focused ? "create" : "create-outline"}
              />
            ),
          }}
        />
      </Tabs>
    </UserOnly>
  );
};

export default Layout;

const styles = StyleSheet.create({});
