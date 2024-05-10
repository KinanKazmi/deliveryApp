import {StyleSheet} from 'react-native';
import {appBrownLight, iconTint, thin} from './shared';

export const drawerStyles = StyleSheet.create({
	profileAreaContainer: {
    padding: 10,
  },
  oneFlex: {
    flex: 1,
  },
  closeAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  titleText: {
    textAlign: "center",
		fontWeight: 'bold',
  },
  drawerCloseContainer: {
    flex: 1,
    alignSelf: "flex-start",
  },
	profileImageSection: {
		margin: 20,
		alignItems: 'center',
		position: 'relative',
	},
  profileImageStyle: {
		width: 100,
    height: 100,
		borderRadius: 50,
		resizeMode: 'cover',
  },
	editIconContainer: {
		position: 'absolute',
		backgroundColor: 'white',
		borderWidth: 3,
		borderRadius: 20,
		padding: 3,
		borderColor: iconTint,
		left: '60%',
	},
	iconContainer: {
		padding: 10,
	},
	crossStyle: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
	},
	iconStyle: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
	},
	menuIconStyle: {
		marginLeft: 10,
		marginRight: -15,
	},
	imgStyle: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
		tintColor: iconTint,
	},
	drawerItemStyle: {
		borderTopColor: appBrownLight,
		borderTopWidth: thin,
		marginHorizontal: 0,
		paddingHorizontal: 0,
		marginBottom: -5,
		paddingVertical: 5,
	},
});