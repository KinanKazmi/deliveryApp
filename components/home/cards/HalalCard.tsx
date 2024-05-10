import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import {Card} from "react-native-paper";
import Spacer from '@/components/shared/Spacer';
import {sharedStyles, halalBG} from '@/components/styles/shared';
const mastercard = require('@/assets/images/mastercard.png');

const HalalCard = () => {
	return (
		<Card style={[styles.halalCard, sharedStyles.cardBorder]}>
			<View style={[styles.cardInternal, sharedStyles.directionRow]}>
				<View style = {sharedStyles.oneFlex}>
					<Text style={[sharedStyles.textMedium, sharedStyles.textBold, sharedStyles.brownText]}>Halal Card</Text>
					<Spacer small/>
					<Text style={[sharedStyles.textMediumSmall]}>Shopping with halal card</Text>
				</View>
				<View style = {styles.cardLogoArea}>
					<Image source={mastercard} style={styles.logoImage} />
				</View>
			</View>
		</Card>
	)
};

const styles = StyleSheet.create({
	halalCard: {
		width: '100%',
		backgroundColor: halalBG,
		height: 90,
		marginBottom: 20,
	},
	cardInternal: {
		padding: 15,
	},
	cardLogoArea: {
		top: 20,
	},
	logoImage: {
		resizeMode: 'contain',
		width: 50,
		height: 50,
	}
});

export default HalalCard;