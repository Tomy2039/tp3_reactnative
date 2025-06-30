import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SubtaskListScreen({ route, navigation }) {
  const { tarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Subtareas de: {tarea.titulo}</Text>
      <FlatList
        data={tarea.subtareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detalle', { subtarea: item })}
          >
            <Text style={styles.text}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff8dc' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  item: { padding: 15, backgroundColor: '#90be6d', marginBottom: 10, borderRadius: 8 },
  text: { color: 'white', fontWeight: 'bold' },
});
