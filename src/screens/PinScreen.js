import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PinScreen = ({ route }) => {
  const pin = route?.params?.pin ?? route?.params ?? null;

  if (!pin) {
    return (
      <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}></View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: pin.image }} style={styles.image} resizeMode="contain" />
        <Text style={styles.pinDescription}>{pin.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  image: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  pinDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default PinScreen;
