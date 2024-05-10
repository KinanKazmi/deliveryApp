import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import {Card} from "react-native-paper";
import Spacer from '@/components/shared/Spacer';
import {sharedStyles, appBackground} from '@/components/styles/shared';

const MiniCard = ({text, img}: {text: string, img: any}) => {
	return (
		<Card style={[styles.cardContainer, sharedStyles.cardBorder]}>
			<View style={styles.cardInternal}>
				<Image source={img} style={styles.logoImage} />
				<Spacer small/>
				<Text style={[sharedStyles.textMediumSmall]}>{text}</Text>
			</View>
		</Card>
	)
};

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: appBackground,
		width: 100,
		height: 100,
	},
	cardInternal: {
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
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

export default MiniCard;