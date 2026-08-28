import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

import {Colors} from '../constants/Colors'

const ThemedCard = ({style,...props}) => {
    const colorScheme = useColorScheme();
    console.log(theme)
    const theme = Colors[colorScheme] ?? Colors[light];

    return (
    <View {...props} style={[
        {backgroundColor : styles.uiBackground},
        {...style},styles.card]} >
    </View> 
  )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:5,
        padding:20
    }
});
export default ThemedCard
