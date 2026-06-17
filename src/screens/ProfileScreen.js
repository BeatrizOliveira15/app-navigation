import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.pesquisa}>
                <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#9E9E9E"/>
                <Feather style={styles.iconSearch} name="search" size={25}/>
            </View>
            <View style={styles.extras}>
                <AntDesign style={styles.iconPlus} name="plus" size={30}/>
                <Ionicons style={styles.iconSettings} name="settings-outline" size={30}/>
            </View>
            <View style={styles.profile}>
                <View style={styles.person}>
                    <Text style={styles.letter}>B</Text>
                    <View style={styles.edit}>
                        <Feather name="edit-2" size={20} color="black" />
                    </View>
                </View>
                <Text style={styles.name}>Beatriz</Text>
                <SimpleLineIcons style={styles.lock} name="lock" size={30} color="black" />
                <Text style={styles.user}>beatrizsoliveira2008</Text>
                <Text style={styles.followers}>3 seguidores</Text>
                <Text style={styles.point}>.</Text>
                <Text style={styles.following}>Seguindo 3</Text>
                <Text style={styles.biograph}>Adicione uma pequena biografia para personalizar seu perfil</Text>
                <View style={styles.edit2}>
                    <Feather name="edit-2" size={15} color="black" />
                </View>
                <View style={styles.botoes}>
                    <View style={styles.bt1}>Compartilhar</View>
                    <View style={styles.bt2}>Editar perfil</View>
                </View>
            </View>
            <View style={styles.pastas}>
                <Text style={styles.created}>Criados</Text>
                <Text style={styles.saved}>Salvos</Text>
                <View style={styles.pts1}>
                    <Image source={require('../../assets/pt1.png')}/>
                    <Image source={require('../../assets/pt2.png')}/>
                </View>
                <View style={styles.textos}>
                        <Text style={styles.ptName1}>Todos os pins</Text>
                        <Text style={styles.ptQuant1}>100 pins   7 h</Text>
                        <Text style={styles.ptName2}>Nails 💅</Text>
                        <Text style={styles.ptQuant2}>60 pins   4 h</Text>
                </View>
                <View style={styles.pts2}>
                    <Image style={styles.pt1} source={require('../../assets/pt3.png')}/>
                    <Image style={styles.pt2} source={require('../../assets/pt4.png')}/>
                </View>
                <View style={styles.textos}>
                        <Text style={styles.ptName3}>Looks 🫶🏽</Text>
                        <Text style={styles.ptQuant3}>123 pins   2 d</Text>
                        <Text style={styles.ptName4}>Fantasy 🐰</Text>
                        <Text style={styles.ptQuant4}>30 pins   2 sem</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white'
    },
    searchInput: {
        backgroundColor: 'white',
        width: 270,
        height: 43,
        marginTop: 5,
        borderRadius: 15,
        fontWeight: 'bold',
        paddingHorizontal: 40,
        fontSize: 18,
        borderColor: '#8E8E8E',
        borderWidth: 1,
        marginLeft: 10
    },
    iconSearch: {
        marginLeft: 18,
        marginTop: -35
    },
    extras: {
        flexDirection: 'row',
        marginLeft: 290,
        gap: 20,
        marginTop: -30
    },
    person:{
        backgroundColor: '#FFC4EC',
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 15
    },
    letter: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 18
    },
    edit: {
    backgroundColor: "#e1e1e1",
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 50
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 100,
        marginTop: -75
    },
    lock: {
        marginLeft: 190,
        marginTop: -33
    },
    user: {
        fontWeight: 'bold',
        color: '#8E8E8E',
        marginLeft: 100,
        fontSize: 16,
        marginTop: 5
    },
    followers: {
        marginTop: 30,
        marginLeft: 25,
        fontWeight: 'bold'
    },
    point: {
        fontSize: 40,
        marginTop: -49,
        marginLeft: 115
    },
    following: {
        marginTop: -23,
        marginLeft: 130,
        fontWeight: 'bold'
    },
    biograph: {
        marginTop: 15,
        color: '#8E8E8E',
        fontWeight: 'bold',
        marginLeft: 25,
        marginRight: 30
    },
    edit2: {
    backgroundColor: "#e1e1e1",
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 350,
    marginTop: -15
    },
    bt1: {
    backgroundColor: '#D9D9D9',
    width: 130,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'arial',
    marginLeft: 25
    },
    bt2: {
    backgroundColor: '#D9D9D9',
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'arial',
    marginLeft: 165,
    marginTop: -40
    },
    created: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 125,
        marginTop: 30
    },
    saved: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 16,
        marginLeft: 215,
        marginTop: -20
    },
    pts1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        gap: 7
    },
    ptName1: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20
    },
    ptQuant1: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'arial',
        color: '#535353',
        marginLeft: 20
    },
    ptName2: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 215,
        marginTop: -38
    },
    ptQuant2: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'arial',
        color: '#535353',
        marginLeft: 215
    },
    pt1: {
        width: 185,
        height: 120,
        borderRadius: 25
    },
    pt2: {
        width: 185,
        height: 120,
        borderRadius: 25
    },
    pts2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        gap: 7,
    },
    ptName3: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20
    },
    ptQuant3: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'arial',
        color: '#535353',
        marginLeft: 20
    },
    ptName4: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 215,
        marginTop: -38
    },
    ptQuant4: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'arial',
        color: '#535353',
        marginLeft: 215
    }
});

export default ProfileScreen;
