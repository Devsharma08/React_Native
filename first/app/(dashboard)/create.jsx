import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer'


const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle={true} style={styles.heading}>Add a new book</ThemedText>
      <Spacer />
    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch",
        justifyContent:"center"
    },
    heading:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center"
    }
})