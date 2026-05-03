import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ForgotPasswordScreen({navigation}) {
  return (
    <View  style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to reset password</Text>

      <TextInput 
      placeholder='Enter your email'
      placeholderTextColor='#fff'
      style={styles.input}
      />

      <TouchableOpacity
      style={styles.button}
      onPress={()=> navigation.navigate('Login')}
      >
        <Text  style={styles.buttonText}>Send </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Login</Text>

      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'center',
  
  },

  content:{
    marginTop: -200,
    gap: 10,
  },

  title:{
    fontSize: 40,
    color:'#fff',
    fontWeight: 'bold',
    // marginBottom: 5,
    textAlign: 'center'
    
    
  },

  subtitle:{
    color: '#cbd5e1',
    marginBottom: 30,
    textAlign: 'center'
    

  
  },

  input:{
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    color:'#fff',
    // textAlign: 'center'
  },

  button:{
    backgroundColor: '#f59e0b', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,

  },

  buttonText:{
    color: '#fff',
    fontWeight: 'bold'

  },

  link:{
    color: '#3b82f6',
    marginTop: 20,
    textAlign: 'center',
  }




})