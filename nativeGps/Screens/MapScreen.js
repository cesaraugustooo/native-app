import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function MapaScreen() {
  return (
    <View style={styles.container}>
      {/* Espaço reservado para o mapa */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.placeholderText}>[ Mapa será exibido aqui ]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
  },
});
