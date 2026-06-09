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
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tudo</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Fantasy 🐰</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Hairstyles ✨</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Flowers</Text>
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
    margin: 4,
    padding: 15,
    backgroundColor: '#FFC0CB',
    borderRadius: 20,
    shadowOpacity: 0.1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    
  },
  // productName: {
  //   fontSize: 14,
  //   color: '#333333',
  //   textAlign: 'center',
  //   marginBottom: 8,
  // },
  pinDescription: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    
  },
});

export default HomeScreen;
