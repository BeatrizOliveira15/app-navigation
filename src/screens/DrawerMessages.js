import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DrawerMessages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Mensagens (Drawer)</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppTabs', { initialRouteName: 'Chat' })}>
        <Text style={styles.buttonText}>Abrir Abas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerMessages;
