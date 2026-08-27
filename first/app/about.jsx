import { StyleSheet, Text, View,useColorScheme } from "react-native";
import React from "react";
import {Link} from 'expo-router'
import {Colors} from '../constants/Colors';

const About = () => {
   const colorScheme = useColorScheme();
      const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={styles.container}>
      <Link
        href="/"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin:30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",
        }}
      >
        Back To Home page
      </Link>
      <Text style={styles.title}>This Is About Page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
