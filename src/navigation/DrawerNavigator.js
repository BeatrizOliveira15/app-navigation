import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { View, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.header}>
            <Text style={styles.title}>Beatriz</Text>
        </View>
    </View>
  );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerTitle: '', }}>
            <Drawer.Screen name="Início" component={HomeScreen} />
            <Drawer.Screen name="Pesquisar" component={SearchScreen} />
            <Drawer.Screen name="Mensagens" component={ChatScreen} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D78289',
        paddingTop: 100,
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0000',
        marginHorizontal: 20,
    },
})

export default DrawerNavigator;
