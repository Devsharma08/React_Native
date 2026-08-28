import { View, StyleSheet } from 'react-native';
import React from 'react';

const Spacer = ({ width = '100%', height = 40 }) => {
  return <View style={[styles.spacer, { height, width }]} />;
};

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 5,
  },
});

export default Spacer;
