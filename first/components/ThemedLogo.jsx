import { StyleSheet, Text, View,useColorScheme,Image } from 'react-native'
import React from 'react'
import Logo from '../assets/icon.png'

import {Colors} from '../constants/Colors'

const ThemedLogo = ({style,src,...props}) => {
    const theme = useColorScheme();
    const styles = Colors[theme] ?? Colors[light];
  return (
    <Image {...props} source={Logo} style={[
        {borderColor:styles.borderColor},
        {...style}]} />
  )
}

export default ThemedLogo
