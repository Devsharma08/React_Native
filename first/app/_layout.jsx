import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Slot, Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";

// context imports
import {UserProvider} from '../context/userContext';

const Layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      {/* <Slot/> */}
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.text,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen  name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
      <Text style={styles.footer}>footer</Text>
    </UserProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
