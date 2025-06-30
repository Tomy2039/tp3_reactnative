import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

export default function LoginScreen({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Title style={styles.title}>🍔 Kiosco App</Title>
      <TextInput
        label="Usuario"
        value={user}
        onChangeText={setUser}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        style={styles.input}
      />
      <Button mode="contained" onPress={onLogin} style={styles.button}>
        Ingresar
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6e6', 
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 28,
    color: '#e63946', 
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#f4a261', 
    borderRadius: 8,
  },
});
