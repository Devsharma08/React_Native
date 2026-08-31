import { Text, useColorScheme,StyleSheet } from 'react-native';
import React from 'react';

import { Colors } from '../constants/Colors';

const ThemedText = ({ style, children, content, isTitle = false }) => {
  const theme = useColorScheme();
  const themeStyles = Colors[theme] ?? Colors.light;
  const textStyle = isTitle ? themeStyles.title : themeStyles.text;

  return (
    <Text style={[{ color: textStyle }, style]}>
      {children ?? content}
    </Text>
  );
};

export default ThemedText;


