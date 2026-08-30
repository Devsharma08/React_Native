import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import { Colors } from "../constants/Colors";

import React from "react";

const ThemedTextInput = ({ placeholder, style, ...props }) => {
  const colorScheme = useColorScheme();
  console.log("color scheme from themed text input", colorScheme);
  const theme = Colors[colorScheme] ?? "light";
  return (
    <TextInput
      placeholder={placeholder}
      {...props}
      style={[
        style,
        {
          backgroundColor: theme.uiBackground,
          borderColor: theme.borderColor,
          color: theme.text,
        },
        styles.component,
      ]}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
  component: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});
