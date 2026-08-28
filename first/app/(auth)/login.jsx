import { StyleSheet, Pressable,Text } from 'react-native'
import {Link} from 'expo-router';
import {Colors} from '../../constants/Colors';


// theme components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedPressable from '../../components/ThemedPressable';
const Login = () => {

    const handleSubmit = () => {
        console.log("handle submit");
    }
  return (

    <ThemedView style={styles.container}>
    
    <Spacer/>
    <ThemedText isTitle={true} style={styles.title}>
        Login to Your Account
    </ThemedText>
    <Spacer height={100}/>
    <ThemedPressable content="Login" onPress={handleSubmit} style={[styles.btn]} />
    <Link href={'/register'} style={{
        textAlign:"center",
        color:"#fff"
    }}>
        Register
    </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        textAlign:"center",
        fontSize:18,
        marginBottom:30
    },
    pressed_btn:{
        opacity:.7,
    },
    btn:{
        padding:10,
        justifyContent:"center",
        backgroundColor:Colors.primary,
        margin:20,
        borderRadius:10,
    }
})