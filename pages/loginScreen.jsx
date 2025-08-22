import { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function LoginScreen({ onLogin }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Necesitamos tu permiso para usar la cámara</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.btn}>
          <Text style={styles.btnText}>Dar permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  async function takePicture() {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync();
      setPhotoUri(result.uri);
      setShowCamera(false);
    }
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraView ref={cameraRef} style={styles.camera}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={takePicture} style={styles.btn}>
              <Text style={styles.btnText}>📸 Tomar Foto</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : photoUri ? (
        <View style={styles.container}>
          <Text style={styles.successText}>
            ✅ Reconocimiento facial realizado con éxito
          </Text>
          <Image source={{ uri: photoUri }} style={styles.photo} />
          <TouchableOpacity onPress={onLogin} style={styles.btn}>
            <Text style={styles.btnText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            Bienvenido, logueate con la cámara
          </Text>
          <TouchableOpacity onPress={() => setShowCamera(true)} style={styles.btn}>
            <Text style={styles.btnText}>Abrir Cámara</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  btn: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  successText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
    textAlign: "center",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
