import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import CenterMainCard from './cards/CenterMainCard';
const leftBlock = require('@/assets/images/leftBlock.png');
const rightBlock = require('@/assets/images/rightBlock.png');

const TopSwipe = () => {
	return (
		<View style={styles.mainContainer}>
			<Image source={leftBlock} style={[styles.zeroLeft ,styles.blockStyle]} />
			<CenterMainCard />
			<Image source={rightBlock} style={[styles.zeroRight ,styles.blockStyle]} />
		</View>
	)
}

const styles = StyleSheet.create({
  mainContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
  },
	zeroLeft: {
		left: 0
	},
	zeroRight: {
		right: 0
	},
	blockStyle: {
		resizeMode: 'contain',
		position: 'absolute',
	},
});

export default TopSwipe