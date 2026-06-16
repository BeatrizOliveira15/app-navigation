import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const PinScreen = ({ route }) => {
  const pin = route?.params?.Pin ?? route?.params?.pin ?? route?.params ?? null;

  if (!pin) {
    return (
      <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}></View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconPinterest}>
        <FontAwesome name="pinterest" size={35} color="#E60023" />
        <Text style={styles.iconTittle}>Pinterest</Text>
      </View>
      <View style={styles.image}>
        <Image source={pin.image} style={styles.pinImage} resizeMode="contain" />
        <View style={styles.pinInfos}>
          <FontAwesome name="heart-o" size={30}/>
          <Text style={styles.pinInfoText1}>10</Text>
          <Ionicons name="chatbubble-outline" size={30}/>
          <Feather name="upload" size={30}/>
          <Text style={styles.pinInfoText2}>...</Text>
          <View style={styles.button}>Salvar</View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  },
  iconPinterest: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap: 10,
    backgroundColor: '#FFFFFF'
  },
  iconTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F01F36'
  },
  image: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  pinImage: {
    flex: 1,
    width: 340,
    height: 500,
    borderRadius: 20,
    marginTop: -20
  },
  pinInfos: {
    flexDirection: 'row',
    gap: 23,
    alignItens: 'center',
    justifyContent: 'center',
    marginTop: 2
  },
  pinInfoText1: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pinInfoText2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -5
  },
  button: {
    backgroundColor: '#F01F36',
    width: 70,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default PinScreen;
