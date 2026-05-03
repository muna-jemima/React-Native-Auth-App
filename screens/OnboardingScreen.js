import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';



export default function OnboardingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome To Our Core Dev Hub.</Text>

        <Text style={styles.subtitle}>
          Learning React Native Step By Step And Build Amazing Apps
        </Text>

        <Image
  source={require('../assets/basketball.png')}
  style={styles.image}
/>

        <Text style={styles.visionText}>Our Vision Is Our Pride</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login') }
      >
        <Text style={styles.buttonText}>Next Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'space-between',
    padding: 20,
  },

  content: {
    marginTop: 100,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: '#fff',
    // marginBottom: 5,
  },

  subtitle: {
    fontSize: 13,
    padding: 10,
    textAlign: "center",
    color: '#fff',
    lineHeight: 28,
    marginBottom: 12,
    
  },

  visionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: "center"
  },

  button: {
    backgroundColor: '#0e3169',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  image: {
    width: "100%",
    height: 350,
    alignSelf: "center",
    resizeMode: "center",
    marginVertical: 20,
    marginTop: 30,
    borderRadius: 50,
  },
});