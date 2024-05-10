import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const navbar = require('@/assets/images/navbar.png');
const home = require('@/assets/images/home.png');

const Navbar = () => {
	return (
		<SafeAreaView style = {styles.navContainer}>
			<Image source = {home} style={styles.home}/>
			<Image source = {navbar} style={styles.nav}/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	navContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	home: {
		top: 60,
		width: 80,
		height: 80,
		resizeMode: 'contain',
	},
	nav: {
		width: '100%',
		// height: 'auto',
		resizeMode: 'contain',
	},
});

export default Navbar;