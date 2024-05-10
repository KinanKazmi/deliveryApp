import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';
import Spacer from '@/components/shared/Spacer';
import {appBackground, sharedStyles} from '@/components/styles/shared';
const food = require('@/assets/images/food.png');


const FoodCard = () => {
	return (
		<Card style={[styles.cardContainer, sharedStyles.cardBorder]}>
			<View style={[styles.cardInternal, sharedStyles.directionRow]}>
				<View style={[sharedStyles.oneFlex, sharedStyles.directionCol]}>
					<Text style={[sharedStyles.textMedium, sharedStyles.textBold, sharedStyles.brownText]}>Food</Text>
					<Spacer small/>
					<Text style={[sharedStyles.textMediumSmall, sharedStyles.textLight]}>Satisfy your cravings</Text>
				</View>
				<View style={sharedStyles.oneFlex}>
					<Image source={food} style={styles.food} />
				</View>
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: appBackground,
	},
	cardInternal: {
		padding: 15,
	},
	food: {
		alignSelf: 'center',
		resizeMode: 'contain',
		width: 50,
		height: 50,
	},
});

export default FoodCard;