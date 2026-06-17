import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesomw6 from '@expo/vector-icons/FontAwesome6';


const SearchScreen = () => {
    return (
        <View style={styles.container}>
                <Image style={styles.imgSearch} source={require('../../assets/fundo-search.png')} resizeMode="cover"/>
                <View style={styles.pesquisa}>
                    <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#9E9E9E"/>
                    <Feather style={styles.iconSearch} name="search" size={25}/>
                    <View style={styles.textImage}>
                        <Text style={styles.smallerText}>Uma make protagonista</Text>
                        <Text style={styles.biggestText}>Aposte no blush</Text>
                    </View>
                    <View style={styles.iconPinterest}>
                        <View style={styles.logo}>
                            <FontAwesome name="pinterest" size={35} color="#E60023" />
                        </View>
                        <Text style={styles.iconTittle}>Pinterest Brasil</Text>
                    </View>
                    <View style={styles.bolinhasGroup}>
                        <Text style={styles.bolinha}>.</Text>
                        <Text style={styles.bolinhas}>......</Text>
                    </View>
                </View>
                <View style={styles.ideias}>
                    <Text style={styles.phrase}>Ideias para você</Text>
                    <Text style={styles.tutoriais}>Tutoriais de penteados</Text>
                    <FontAwesomw6 style={styles.maior} name="greater-than" size={15} />
                    <View style={styles.fotos}>
                        <Image style={styles.hair1} source={require('../../assets/hair1.png')}/>
                        <Image style={styles.hair2} source={require('../../assets/hair2.png')}/>
                        <Image style={styles.hair3} source={require('../../assets/hair3.png')}/>
                        <Image style={styles.hair4} source={require('../../assets/hair4.png')}/>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    imgSearch: {
        width: '100%',
        height: 340,
        marginBottom: 20
    },
    searchInput: {
        backgroundColor: 'white',
        width: 370,
        height: 43,
        marginTop: -340,
        borderRadius: 10,
        fontWeight: 'bold',
        paddingHorizontal: 40,
        fontSize: 18
    },
    iconSearch: {
        marginLeft: 10,
        marginTop: -35
    },
    textImage: {
    alignItems: 'center',
    marginTop: 115,
    gap: 10
    },
    smallerText: {
        color: 'white',
        fontWeight: 'bold'
    },
    biggestText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    iconPinterest: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    marginTop: 65,
  },
  logo: {
    backgroundColor: 'white',
    width: 30,    
    height: 30,          
    borderRadius: 50, 
  },
    iconTittle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  bolinha: {
    fontSize: 90,
    marginTop: -60,
    marginLeft: 120,
    color: '#6D6060'
  },
  bolinhas: {
    fontSize: 90,
    color: '#CCC8C8',
    marginTop: -120,
    marginLeft: 140
  },
  phrase: {
    marginRight: 240,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#5F5A5A'
  },
  tutoriais: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  maior: {
    marginLeft: 340,
    marginTop: -20
  },
    fotos: {
        width: 140,
        height: 140,
        alignItems: 'center',
        flexDirection: 'row'
    },
    hair1: {
        width: 90,
        height: 120,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    hair2: {
        width: 90,
        height: 120,
    },
    hair3: {
        width: 90,
        height: 120,
    },
    hair4: {
        width: 90,
        height: 120,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }
});


export default SearchScreen;
