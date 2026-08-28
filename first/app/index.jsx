import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../constants/Colors";
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from "../components/Spacer";
import ThemedLogo from '../components/ThemedLogo';

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>    
    <ThemedView style={styles.container} >
      <ThemedLogo
        style={{
          height: 100,
          width: 100,
          objectFit: "cover",
          borderRadius: 100,
          borderWidth: 3,
        }}
      />
      <Spacer/>
      <ThemedText isTitle={false} style={styles.title}>This Is Home Page</ThemedText>
      <Spacer/>

       <Link
        href="/login"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",}}
      >
        To Login page
      </Link>
      <Link
        href="/register"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",
        }}
      >
        To Register page
      </Link>
      <Link
        href="/create"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",}}
      >
        Create
      </Link>
      <Link
        href="/profile"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",}}
      >
        Profile
      </Link>
      <Link
        href="/books"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",}}
      >
        To Login page
      </Link>
      </ThemedView>
      </>

  );
};

export default Home;

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
