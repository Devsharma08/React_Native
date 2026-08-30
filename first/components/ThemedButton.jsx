import { StyleSheet, Text, Pressable, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ style, onPress, content }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? "light";

  return (
    <Pressable onPress={onPress} style={[styles.btn, style, { backgroundColor: Colors.primary }]}>
      <Text style={{ color: theme.text, textAlign: 'center' }}>{content}</Text>
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn:{
    padding:10,
    borderRadius:20,
  }
})