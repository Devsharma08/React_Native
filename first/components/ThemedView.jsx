import { View, useColorScheme } from 'react-native';
import React from 'react';

import { Colors } from '../constants/Colors';

const ThemedView = ({ style, children }) => {
  const theme = useColorScheme();
  const themeStyles = Colors[theme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: themeStyles.background }, style]}>
      {children}
    </View>
  );
};

export default ThemedView;
