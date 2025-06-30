import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubtaskDetailScreen({ route }) {
  const { subtarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text style={styles.label}>Descripción:</Text>
      <Text>{subtarea.descripcion}</Text>
      <Text style={styles.label}>Estado:</Text>
      <Text>{subtarea.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff8dc' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  label: { fontWeight: 'bold', marginTop: 10 },
});
