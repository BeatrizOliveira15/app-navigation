import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { pins } from '../data/home';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('Pin', { Pin: item })}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.pinDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.temas}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, textDecorationLine: 'underline' }}>Tudo</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Fantasy 🐰</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Hairstyles ✨</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Flowers</Text>
      </View>
      <FlatList
        data={pins}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  temas: {
    display: 'flex',
    flexDirection: 'row',
    gap: 21,
    justifyContent: 'center',
    marginBottom: 20
  },
  Card: {
    flex: 1,
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowOpacity: 0.1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: 170,
    height: 250,
    marginBottom: 10,
    borderRadius: 20,
  },
  // productName: {
  //   fontSize: 14,
  //   color: '#333333',
  //   textAlign: 'center',
  //   marginBottom: 8,
  // },
  pinDescription: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: -15
  },
});

export default HomeScreen;
