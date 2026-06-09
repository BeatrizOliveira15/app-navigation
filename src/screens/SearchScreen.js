import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';


const SearchScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.topo}>
				<Image style={styles.imgSearch} source={require('../../assets/fundo-search.png')}/>
			</View>
			{/* Rever estilo */}
			{/* <View style={styles.search}>
				  <Feather name="search" size={size} color={color}/>
			</View> */}
			<View style={styles.textinho}>
				<Text></Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	text: { fontSize: 20 },
	imgSearch: {
    width: 390,
    height: 340,
	marginBottom: 250
}
});

export default SearchScreen;
