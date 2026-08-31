import { StyleSheet } from "react-native";
import { router } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import useUser from "../../hooks/userHook";

const Profile = () => {
  const { user, signOut } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/login");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText style={styles.value}>{user?.email ?? "Not logged in"}</ThemedText>
      <Spacer />
      <ThemedText style={styles.heading}>Time to start reading some books...</ThemedText>
      <Spacer />
      <ThemedButton content="Logout" onPress={handleLogout} style={styles.logoutButton} />
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    fontSize: 16,
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
    borderRadius: 12,
  },
});