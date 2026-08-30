import { StyleSheet, TouchableWithoutFeedback,Keyboard } from "react-native";
import { Link } from "expo-router";
import {useState} from 'react';
import { useUser } from '../../hooks/userHook'

// theme components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user} = useUser();

  const handleSubmit = async() => {
    try {
        const res = await user.login(email,password);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText isTitle={true} style={styles.title}>
        Login to Your Account
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
      <ThemedButton
        content="Login"
        onPress={handleSubmit}
        style={styles.btn}
      />
      <Link
        href={"/register"}
        style={{
          textAlign: "center",
          color: "#fff",
        }}
      >
        Register instead
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
