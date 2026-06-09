import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import RootStack from './RootStack';
import { DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { View, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Beatriz</Text>
      </View>
      <DrawerItem label="Início" onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Home' } }); navigation.closeDrawer(); }} />
      <DrawerItem label="Pesquisar" onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Search' } }); navigation.closeDrawer(); }} />
      <DrawerItem label="Mensagens" onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Chat' } }); navigation.closeDrawer(); }} />
      <DrawerItem label="Perfil" onPress={() => { navigation.navigate('Main', { screen: 'TabsScreen', params: { screen: 'Profile' } }); navigation.closeDrawer(); }} />
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
          height: 35
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default DrawerNavigator;
