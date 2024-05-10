import React from 'react';
import {View, StyleSheet} from "react-native";
import LargeCard from './cards/LargeCard';
import HalalCard from './cards/HalalCard';
import FoodCard from './cards/FoodCard';

const MidCardArea = () => {
	return (
		<View style = {styles.cardsContainer}>
			<LargeCard />
			<View style = {styles.rightCards}>
				<HalalCard />
				<FoodCard />
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	cardsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20,
	},
	rightCards: {
		width: '42%',
		flexDirection: 'column',
	},
});

export default MidCardArea;