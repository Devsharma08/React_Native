import { StyleSheet, Text, View,ActivityIndicator,useColorScheme } from 'react-native';
import {Colors} from '../constants/Colors';

const ThemedLoader = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme];

  return (
    <ActivityIndicator style={styles.loader} size="large" color={theme.text} />
  )
}

export default ThemedLoader;

const styles = StyleSheet.create({
    loader:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

