import { View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import React from "react";

import { Colors } from "../constants/Colors";

const ThemedView = ({ style, children, isSafe }) => {
  const theme = useColorScheme();
  const themeStyles = Colors[theme] ?? Colors.light;

  const insets = useSafeAreaInsets();

  return (
    <>
      {!isSafe ? (
        <View style={[{ backgroundColor: themeStyles.background }, style]}>
          {children}
        </View>
      ) : (
        <>
          <View style={[{ backgroundColor: themeStyles.background,paddingTop:insets.top,paddingBottom:insets.bottom }, style]}>
            {children}
          </View>
        </>
      )}
    </>
  );
};

export default ThemedView;

