import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TAREAS } from '../constants/tareas';

export default function TaskListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      <FlatList
        data={TAREAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Subtareas', { tarea: item })}
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
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  item: { padding: 15, backgroundColor: '#f4a261', marginBottom: 10, borderRadius: 8 },
  text: { color: 'white', fontWeight: 'bold' },
});
