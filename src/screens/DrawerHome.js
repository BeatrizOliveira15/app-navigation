import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DrawerHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Início (Drawer)</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppTabs', { initialRouteName: 'Home' })}>
        <Text style={styles.buttonText}>Abrir Abas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHome;
