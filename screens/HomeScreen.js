import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}> React Native is a framework that allows you to build mobile  Application using Javascript / TypeScript </Text>

      <View style={styles.post}>
        <Text style={styles.username}>@jemima_dev</Text>
        <Text style={styles.content}>Just Built My First React Native App</Text>
      </View>

      <View style={styles.post}>
        <Text style={styles.username}>@techgirl</Text>
        <Text style={styles.content}>Learning Never Stops</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.title}>You have to believe in yourself when no one else does.
          When you have a dream, you've got to grab it and never let go.
        </Text>
      </View>

     

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
   
    
  },

  header:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 60,
   marginTop: 100,
     textAlign: 'center',
  },

  post:{
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  username:{
    color: '#3b82f6',
    fontWeight: 'bold',

  },

  content:{
    color: '#fff',
    marginTop: 5,
  },

 title:{
  color: '#fff'
 }

})