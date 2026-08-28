import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer'


const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle={true} style={styles.heading}>Your Email</ThemedText>
      <Spacer />
      <ThemedText style={styles.heading}>Time to start reading some books...</ThemedText>
      <Spacer/>
    </ThemedView>
  )
}

export default Profile

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