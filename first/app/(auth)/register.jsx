import { useState } from "react";

import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import useUser from "../../hooks/userHook";

// theme components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, register } = useUser();

  const handleSubmit = async () => {
    try {
      setError("");
      const userData = await register(email, password);
      console.log("current user is ", userData ?? user);
    } catch (error) {
      console.log(error);
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText isTitle={true} style={styles.title}>
        Register to Your Account
      </ThemedText>
      <Spacer height={100} />
      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}

      <ThemedButton content="Register" onPress={handleSubmit} style={styles.btn} />
      <Link
        href={"/login"}
        style={{
          textAlign: "center",
          color: "#fff",
        }}
      >
        Login instead
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  pressed_btn: {
    opacity: 0.7,
  },
  btn: {
    padding: 10,
    justifyContent: "center",
    margin: 20,
    borderRadius: 10,
  },
  errorText: {
    backgroundColor: "#c62828",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    width: "80%",
    textAlign: "center",
  },
});