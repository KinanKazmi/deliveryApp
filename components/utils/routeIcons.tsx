import {Image, StyleSheet} from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {iconTint} from '@/components/styles/shared';
import {drawerStyles} from '../styles/drawer';

export type IconType = {
	name?: any,
	size: number,
	color: string,
	type?: string,
};

export const makeIcon = ({name, size, color, type}: IconType) => {
	if (type === 'material') {
		return <MaterialIcons name={name} size={20} color={iconTint} style={drawerStyles.menuIconStyle} />;
	}
	if (type === 'img') {
		return <Image source={name} style={[drawerStyles.imgStyle, drawerStyles.menuIconStyle]} />;
	}
	return <Ionicons name={name} size={20} color={iconTint} style={drawerStyles.menuIconStyle}/>
};