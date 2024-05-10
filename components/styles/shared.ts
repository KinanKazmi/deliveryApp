import {StyleSheet} from 'react-native';
export const appBrown = '#83533E';
export const appBrownLight = 'rgba(131, 83, 62, 0.25)';
export const iconTint = '#656565';
export const appBackground = 'white';
export const halalBG = '#EDE8DE';
export const thin = StyleSheet.hairlineWidth;

export const sharedStyles = StyleSheet.create({
	background: {
		backgroundColor: appBackground
	},
	iconContainer: {
		padding: 10,
	},
	oneFlex: {
		flex: 1
	},
	alignCenter: {
		alignItems: 'center'
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	directionRow: {
		flexDirection: 'row',
	},
	directionCol: {
		flexDirection: 'column',
	},
	textLarge: {
		fontSize: 26,
	},
	textMedium: {
		fontSize: 12,
	},
	textMediumSmall: {
		fontSize: 10,
	},
	textSmall: {
		fontSize: 9,
	},
	textBold: {
		fontWeight: 'bold',
	},
	textLight: {
		fontWeight: '300',
	},
	brownText: {
		color: appBrown,
	},
	cardBorder: {
		shadowOffset: {width: 2, height: 2},
		shadowRadius: 5,
		shadowOpacity: 0.1
	},
});