import React from 'react'
import {View} from 'react-native'
import {AntDesign, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {iconTint, sharedStyles} from '../styles/shared'
import {ParamListBase, RouteProp} from '@react-navigation/native'
import {DrawerNavigationProp} from '@react-navigation/drawer'

const RightIcons = ({
	route,
	navigation
}: {
	route: RouteProp<ParamListBase, string>,
	navigation: DrawerNavigationProp<ParamListBase, string>
}) => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity style={sharedStyles.iconContainer}>
				<SimpleLineIcons name="wallet" size={20} color={iconTint} />
			</TouchableOpacity>
			<TouchableOpacity style={sharedStyles.iconContainer}>
				<Ionicons name="location-outline" size={20} color={iconTint} />
			</TouchableOpacity>
			<TouchableOpacity style={sharedStyles.iconContainer}>
				<MaterialCommunityIcons name="bell-outline" size={20} color={iconTint} />
			</TouchableOpacity>
			<TouchableOpacity style={sharedStyles.iconContainer}>
				<AntDesign name="message1" size={20} color={iconTint} />
			</TouchableOpacity>
		</View>
	)
}

export default RightIcons