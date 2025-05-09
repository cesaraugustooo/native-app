import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo do app */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo_localiza.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Nome do aplicativo */}
      <Text style={styles.title}>Localiza+</Text>

      {/* Botão de entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#318EC5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '300',
    marginBottom: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
