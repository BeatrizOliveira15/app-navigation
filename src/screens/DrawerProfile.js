import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DrawerProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Perfil (Drawer)</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppTabs', { initialRouteName: 'Profile' })}>
        <Text style={styles.buttonText}>Abrir Abas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerProfile;
