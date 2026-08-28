import { StyleSheet, Text,Pressable,useColorScheme } from 'react-native'
import React from 'react'
import {Colors} from '../constants/Colors'

const ThemedPressable = ({style,onPress,content}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={theme.text}> {content} </Text>
    </Pressable>
  )
}

export default ThemedPressable

const styles = StyleSheet.create({})