import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import {Slot,Stack} from 'expo-router';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Colors} from '../constants/Colors';

const Layout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    {/* <Slot/> */}
    <StatusBar value="auto" />
    <Stack screenOptions={{
        headerStyle:{backgroundColor:theme.navBackground,
        },headerTintColor:theme.text,
        headerTitleAlign:"center",
    }}>
        <Stack.Screen name="index" options={{
            title:"Home",
        }} />
        <Stack.Screen name="about" options={{
            title:"About",
        }} />
        <Stack.Screen name="contact" options={{
            title:"Contact",
            headerShown:false
        }} />
    </Stack>
    <Text style={styles.footer}>footer</Text>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({
    footer:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold"
    }
})