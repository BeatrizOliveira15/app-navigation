import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import RootStack from './RootStack';
import { DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { View, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{
      flex: 1, 
      backgroundColor: '#FFC0CB',
      }}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Text style={styles.letter}>B</Text>
        </View>
        <Text style={styles.title}>Beatriz</Text>
      </View>
        <DrawerItem label="Início" labelStyle={styles.drawerLabel} icon={({ color, size }) => <Feather name="home" size={35} color="black" />} onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Home' } }); navigation.closeDrawer(); }}/>
        <DrawerItem label="Pesquisar" labelStyle={styles.drawerLabel} icon={({ color, size }) => <Feather name="search" size={35} color="black" />} onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Search' } }); navigation.closeDrawer(); }}/> 
        <DrawerItem label="Mensagens" labelStyle={styles.drawerLabel} icon={({ color, size }) => <Ionicons name="chatbubble-ellipses-outline" size={35} color="black" />} onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Chat' } }); navigation.closeDrawer(); }}/>
        <DrawerItem label="Perfil" labelStyle={styles.drawerLabel} icon={({ color, size }) => <Ionicons name="person-outline" size={35} color="black" />} onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Profile' } }); navigation.closeDrawer(); }}/>
</DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFC0CB',
          height: 35,
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'gray'
        }
       }}
    >
      <Drawer.Screen name="Main" component={RootStack} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D78289',
    paddingTop: 100,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  user: {
    backgroundColor: '#FFC0CB',
    width: 80,
    height: 80,
    marginBottom: 5,
    marginTop: -90,
    borderRadius: 100,
    marginLeft: 100
  },
  letter: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 17,
    marginLeft: 30
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 100
  },
  drawerLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default DrawerNavigator;
