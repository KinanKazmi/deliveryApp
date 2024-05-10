import React from "react";
import {View, ImageBackground, StyleSheet, Image, Text} from "react-native";
import {Card} from "react-native-paper";
import {sharedStyles} from "../../styles/shared";
const cardBG = require('@/assets/images/cardbg.png');
const cardDots = require('@/assets/images/cardDots.png')

const CenterMainCard = () => {
  return (
    <Card style={[styles.cardMain, sharedStyles.cardBorder]}>
			<ImageBackground source={cardBG} imageStyle={styles.cardBGImage}>
				<View style={styles.cardInternal}>
					<Image source={cardDots} style={styles.cardDots} />
					<View style={styles.textArea}>
						<Text style={sharedStyles.textMedium}>New</Text>
						<Text style={[sharedStyles.textLarge, sharedStyles.textBold]}>Offers</Text>
						<Text style={sharedStyles.textSmall}>starts in 1d : 18h : 29m</Text>
					</View>
				</View>
			</ImageBackground>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardMain: {
		width: '90%',
		height: 150,
  },
	cardBGImage: {
		width: '100%',
		height: 150,
		resizeMode: 'cover',
		borderRadius: 10,
	},
	cardInternal: {
		padding: 15,
	},
	cardDots: {
		resizeMode: 'contain',
		width: 20,
		height: 20,
	},
	textArea: {
		margin: 10
	}
});

export default CenterMainCard;
