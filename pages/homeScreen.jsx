import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Button, Card, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ onLogout }) {
  const productos = [
    { nombre: 'Gaseosas', icono: 'bottle-soda', color: '#f94144' },
    { nombre: 'Snacks', icono: 'food', color: '#f3722c' },
    { nombre: 'Chocolates', icono: 'candycane', color: '#f9c74f' },
    { nombre: 'Cigarrillos', icono: 'smoking', color: '#90be6d' },
    { nombre: 'Panificados', icono: 'bread-slice', color: '#577590' },
    { nombre: 'Otros', icono: 'basket', color: '#43aa8b' },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.title}>🍭 Bienvenido al Kiosco</Title>

      <ScrollView contentContainerStyle={styles.grid}>
        {productos.map((prod, index) => (
          <Card key={index} style={[styles.card, { backgroundColor: prod.color }]}>
            <Card.Content style={styles.cardContent}>
              <MaterialCommunityIcons name={prod.icono} size={40} color="white" />
              <Text style={styles.cardText}>{prod.nombre}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <Button mode="contained" onPress={onLogout} style={styles.logoutButton}>
        Cerrar sesión
      </Button>
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#e63946',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    height: 120,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#e76f51',
  },
});
