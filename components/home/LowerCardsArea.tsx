import React from 'react'
import {View, StyleSheet} from 'react-native';
import {sharedStyles} from '../styles/shared'
import MiniCard from './cards/MiniCard';
const earn = require('@/assets/images/earn.png');
const shop = require('@/assets/images/shop.png');
const points = require('@/assets/images/points.png');

const LowerCardsArea = () => {
	return (
		<View style={[styles.cardContainer, sharedStyles.directionRow]}>
			<MiniCard text={'Refer To Earn'} img={earn} />
			<MiniCard text={'Rewards Shop'} img={shop} />
			<MiniCard text={'Convert into Makkah Points'} img={points} />
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 20,
		width: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});

export default LowerCardsArea;
