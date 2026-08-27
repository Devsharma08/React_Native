import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import Logo from "../assets/icon.png";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      <Image
        source={Logo}
        style={{
          height: 100,
          width: 100,
          objectFit: "cover",
          margin: 30,
          borderRadius: 100,
          borderWidth: 3,
          borderColor: "black",
        }}
      />
      <Text style={[styles.title,{color:theme.text
      }]}>This Is Home Page</Text>

      <Link
        href="/about"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",
        }}
      >
        To About page
      </Link>
      <Link
        href="/contact"
        style={{
          // name of the file
          backgroundColor: "yellow",
          padding: 10,
          margin: 30,
          borderRadius: 5,
          boxShadow: "4px 4px rgb(217, 255, 0)",
        }}
      >
        To Contact page
      </Link>
    </View>
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
