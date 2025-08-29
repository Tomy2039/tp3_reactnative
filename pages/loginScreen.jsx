import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import * as ImageManipulator from 'expo-image-manipulator';

export default function LoginScreen({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [cuil, setCuil] = useState('');
  const [file, setFile] = useState(null);

  // Seleccionar archivo
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: 'image/*', copyToCacheDirectory: true });
      console.log(result);

      if (!result.canceled && result.assets.length > 0) {
        setFile(result.assets[0]);
      } else {
        setFile(null);
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo seleccionar el archivo");
    }
  };

  // Convertir HEIC a JPEG si es necesario
  const processImage = async (file) => {
    if (!file.uri) return null;
    if (file.mimeType === 'image/heic') {
      const manipResult = await ImageManipulator.manipulateAsync(
        file.uri,
        [],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );
      return {
        uri: manipResult.uri,
        type: 'image/jpeg',
        name: file.name.replace(/\.[^.]+$/, '.jpg'),
      };
    } else {
      return {
        uri: file.uri,
        type: file.mimeType || 'image/jpeg',
        name: file.name,
      };
    }
  };

  const isValidRegister = () => !!file?.uri && !!cuil;
  const isValidRecognize = () => !!file?.uri;

  const handleRegister = async () => {
    if (!isValidRegister()) {
      Alert.alert("Error", "Debes ingresar CUIL y seleccionar un archivo");
      return;
    }

    const imageFile = await processImage(file);

    const formData = new FormData();
    formData.append("cuil", cuil);
    formData.append("image", imageFile);

    try {
      const response = await fetch("https://52ve8mm1q0ra.share.zrok.io/register", {
        method: "POST",
        body: formData,
      });
      const result = await response.text();
      Alert.alert("Respuesta /register", result);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo registrar");
    }
  };

  const handleRecognize = async () => {
    if (!isValidRecognize()) {
      Alert.alert("Error", "Debes seleccionar un archivo");
      return;
    }

    const imageFile = await processImage(file);

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch("https://52ve8mm1q0ra.share.zrok.io/recognize", {
        method: "POST",
        body: formData,
      });
      const result = await response.text();
      Alert.alert("Respuesta /recognize", result);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo reconocer la imagen");
    }
  };

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

      <TextInput
        label="CUIL (solo para register)"
        value={cuil}
        onChangeText={setCuil}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button mode="outlined" onPress={pickFile} style={styles.button}>
        Seleccionar Imagen
      </Button>

      {file && (
        <Image
          source={{ uri: file.uri }}
          style={{ width: 150, height: 150, marginVertical: 10, alignSelf: 'center', borderRadius: 8 }}
        />
      )}

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Enviar a /register
      </Button>

      <Button
        mode="contained"
        onPress={handleRecognize}
        style={[styles.button, { backgroundColor: '#4caf50' }]}
      >
        Enviar a /recognize
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
    borderRadius: 8,
  },
});
