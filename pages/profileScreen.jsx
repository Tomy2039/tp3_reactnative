import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>👤 Mi Perfil</Title>
      <Text style={styles.text}>Nombre: Juan Pérez</Text>
      <Text style={styles.text}>Correo: juan@kiosco.com</Text>
      <Text style={styles.text}>Rol: Vendedor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6e6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#e63946',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
