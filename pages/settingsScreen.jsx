import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Switch, Text } from 'react-native-paper';

export default function SettingsScreen() {
  const [modoOscuro, setModoOscuro] = React.useState(false);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>⚙️ Ajustes</Title>
      <View style={styles.option}>
        <Text>Modo oscuro</Text>
        <Switch value={modoOscuro} onValueChange={setModoOscuro} />
      </View>
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
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
