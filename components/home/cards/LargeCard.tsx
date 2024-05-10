import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import {Card} from "react-native-paper";
import Spacer from '@/components/shared/Spacer';
import {appBackground, sharedStyles} from '@/components/styles/shared';
const groceries = require('@/assets/images/groceries.png');

const LargeCard = () => {
	return (
		<Card style={[styles.largeCard, sharedStyles.cardBorder]}>
			<View style={styles.cardInternal}>
				<Image source={groceries} style={styles.groceries} />
					<Spacer />
					<Text style={[sharedStyles.textMedium, sharedStyles.textBold, sharedStyles.brownText]}>Groceries</Text>
					<Spacer small/>
					<Text style={[sharedStyles.textMediumSmall, sharedStyles.textLight]}>Anything, Anytime, Anywhere</Text>
			</View>
		</Card>
	)
};

const styles = StyleSheet.create({
  largeCard: {
		width: '40%',
		backgroundColor: appBackground,
  },
	cardInternal: {
		padding: 15,
	},
	groceries: {
		resizeMode: 'contain',
		width: 90,
		height: 90,
		alignSelf: 'center'
	},
});

export default LargeCard;