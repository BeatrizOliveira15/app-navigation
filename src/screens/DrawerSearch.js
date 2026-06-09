import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DrawerSearch = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Pesquisar (Drawer)</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppTabs', { initialRouteName: 'Search' })}>
        <Text style={styles.buttonText}>Abrir Abas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 16 },
  button: { backgroundColor: '#3483FA', padding: 12, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default DrawerSearch;
