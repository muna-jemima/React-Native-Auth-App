import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>

        <Text style={styles.title}>Welcome Back To Learning Campus</Text>

        <Text style={styles.subtitle}>Login To Continue</Text>

         <TextInput
         placeholder='Email'
         placeholderTextColor= "#fff"
         style ={styles.input}
         
         />

         <TextInput
         placeholder='Password'
         placeholderTextColor='#fff'
         style={styles.input}
         
         />
{/* 
         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>

         </TouchableOpacity> */}

       <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
        <Text style={styles.text2}>Forgot Password?</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('Home')}>
       
       <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.text2}>Don't have an account? Register</Text>

       </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    alignSelf: "center"
  },

  subtitle: {
    fontSize: 13,
    color: '#cbd5e1',
    marginBottom: 30,
    alignSelf: "center"
  },

  input: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    color: '#fff',
  },

  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  text2: {
    color: '#3b82f6',
    marginBottom: 30,
    marginTop: 10,
    textAlign: 'right',


  }
});