import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesomw6 from '@expo/vector-icons/FontAwesome6';

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontWeight: 'bold', fontSize: 17}}>Atualizações</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 17, textDecorationLine: 'underline' }}>Caixa de Entrada</Text>
            </View>
            <View style={styles.msg}>
                <View style={styles.edit}>
                <AntDesign style={styles.iconEdit} name="edit" size={25} color="white"/>
                </View>
            <Text style={styles.novaMsg}>Nova Mensagem</Text>
            </View>
            <View style={styles.mensagens}>
                <Text style={styles.msgs}>Mensagens</Text>
                <View style={styles.conversas}>
                    <View style={styles.contact}>
                        <Text style={styles.letter}>A</Text>
                        <Text style={styles.nome}>Ana</Text>
                        <EvilIcons style={styles.iconMsg} name="arrow-up" size={25}/>
                    </View>
                    <View style={styles.textinhos}>
                        <Text style={styles.message}>Você enviou 5 pins</Text>
                        <Text style={styles.data}>18 de mai.</Text>
                    </View>
                    <View style={styles.contact2}>
                        <Text style={styles.letter2}>L</Text>
                        <Text style={styles.nome2}>Lavínia</Text>
                    </View>
                    <View style={styles.textinhos2}>
                        <Text style={styles.message2}>Mensagem</Text>
                        <Text style={styles.data2}>1 de mai.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contatos}>
                <Text style={styles.conts}>Contatos</Text>
                <View style={styles.pessoas}>
                    <View style={styles.person}>
                        <Text style={styles.pessoa}>A</Text>
                        <Text style={styles.nome}>Ana</Text>
                    </View>
                    <Text style={styles.mensagem}>Diga olá 😀</Text>
                    <FontAwesomw6 style={styles.maior} name="greater-than" size={15} />

                    <View style={styles.person}>
                        <Text style={styles.pessoa}>L</Text>
                        <Text style={styles.nome}>Lavínia</Text>
                    </View>
                    <Text style={styles.mensagem}>Diga olá 😀</Text>
                    <FontAwesomw6 style={styles.maior} name="greater-than" size={15} />

                    <View style={styles.person}>
                        <Text style={styles.pessoa}>J</Text>
                        <Text style={styles.nome}>Júlia</Text>
                    </View>
                    <Text style={styles.mensagem}>Diga olá 😀</Text>
                    <FontAwesomw6 style={styles.maior} name="greater-than" size={15} />

                    <View style={styles.person}>
                        <Text style={styles.pessoa}>H</Text>
                        <Text style={styles.nome}>Helen</Text>
                    </View>
                    <Text style={styles.mensagem}>Diga olá 😀</Text>
                    <FontAwesomw6 style={styles.maior} name="greater-than" size={15} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white' 
    },
    top: {
    flexDirection: 'row',
    gap: 21,
    justifyContent: 'center'
  },
  msg: {
    flexDirection: 'row',
    marginRight: 160,
    gap: 10,
    justifyContent: 'center',
    marginTop: 20
  },
  edit: {
    backgroundColor: "#E60023",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  novaMsg: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 16
  },
  msgs: {
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 16
  },
  contact: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 23,
    flexDirection: 'row'
  },
  letter: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 7
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 27
  },
  iconMsg: {
    marginTop: 25,
    marginLeft: -33
  },
  message: {
    marginLeft: 105,
    marginTop: -22,
    fontWeight: 'bold',
    color: '#8E8E8E', 
    fontSize: 16
  },
  data: {
    fontWeight: 'bold',
    color: '#8E8E8E', 
    fontSize: 16,
    marginLeft: 300,
    marginTop: -50
  },
  contact2: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 23,
    flexDirection: 'row'
  },
  letter2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 7
  },
  nome2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  message2: {
    marginLeft: 85,
    marginTop: -22,
    fontWeight: 'bold',
    color: '#8E8E8E', 
    fontSize: 16
  },
  data2: {
    fontWeight: 'bold',
    color: '#8E8E8E', 
    fontSize: 16,
    marginLeft: 310,
    marginTop: -50
  },
   conts: {
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 16
  },
  pessoas: {
    gap: 5
  },
    person: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 23,
    flexDirection: 'row'
  },
  pessoa: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 17,
    marginTop: 7
  },
  mensagem: {
    marginLeft: 85,
    marginTop: -25,
    fontWeight: 'bold',
    color: '#8E8E8E', 
    fontSize: 16
  },
  maior: {
    marginLeft: 360,
    marginTop: -45
  }
});

export default ChatScreen;
