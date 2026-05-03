import { StyleSheet, Text, View ,TextInput ,TouchableOpacity,  } from 'react-native'
import React from 'react'

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>

      {/* <View style={styles.imageBox}>

      <Image
      source={require('../assets/bravo.jpg')}
      style={styles.image}
      />

      </View> */}

      <View style={styles.contentView}>
        <Text style={styles.title}>Register</Text>
        
        {/* <Text style={styles.subtitle}>Register</Text> */}

        <TextInput 
        placeholder='Full Name'
        placeholderTextColor ='#fff'
        style={styles.input}
        />

        <TextInput
        placeholder = 'Email'
        placeholderTextColor ='#fff'
        style={styles.input}
        />

        <TextInput
        placeholder = 'Password'
        placeholderTextColor ='#fff'
        style={styles.input}
        />

        <TextInput
        placeholder='Re-Enter password'
        placeholderTextColor ='#fff'
        style={styles.input}
        
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={()=> navigation.navigate('Home')}>
        
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Login</Text>

        </TouchableOpacity>



</View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#0f172a",
    padding:20,
    justifyContent: 'center'
   
    
  },
  title:{
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
    
   
  },
  contentView:{
    marginTop:-130,
    
   
  },

//  subtitle:{
//   color: '#fff',
//   marginBottom: 40,
//   //  marginTop: 0,
//   fontSize: 13,
//   fontWeight: 'small'
//  },

 input:{
  backgroundColor: '#1e293b',
  padding: 15,
  borderRadius:15,
  marginBottom: 39,
  
 },

 button:{
  backgroundColor:'#fff',
  padding: 15,
  borderRadius: 15,
 alignItems: 'center',
 },

 link:{
  color: '#fff',
  marginTop: 15,
  textAlign: 'center'
 },


//  imageBox:{
// marginTop:10,
// height:'50%',

//  },

//  image:{
//   width: 120,
//     height: '100',
//     alignSelf: "center",
//     // resizeMode: "center",
//     // marginVertical: 20,
//     borderRadius: 90,   
//  },






})