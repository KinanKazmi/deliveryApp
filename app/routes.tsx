import {IconType, makeIcon} from "@/components/utils/routeIcons";
const helpCenter = require('@/assets/images/helpCenter.png');
const tnc = require('@/assets/images/tnc.png');

export const routes = [
	{
		path: 'index',
		title: '',
		label: 'Favourite Brands',
		icon: ({size, color}: IconType) => makeIcon({name: 'heart-outline', size, color})
	},
	{
		path: 'orders/index',
		title: 'Orders',
		label: 'Orders & Reordering Brands',
		icon: ({size, color}: IconType) => makeIcon({name: 'bag-handle-outline', size, color})
	},
	{
		path: 'addresses/index',
		title: 'addresses',
		label: 'Addresses',
		icon: ({size, color}: IconType) => makeIcon({name: 'location-outline', size, color})
	},
	{
		path: 'rewards/index',
		title: 'Challenges & Rewards',
		label: 'Challenges & Rewards',
		icon: ({size, color}: IconType) => makeIcon({name: 'trophy-outline', size, color})
	},
	{
		path: 'vouchers/index',
		title: 'Vouchers',
		label: 'Vouchers',
		icon: ({size, color}: IconType) => makeIcon({name: 'card-giftcard', size, color, type: 'material'})
	},
	{
		path: 'help/index',
		title: 'Help Center',
		label: 'Help Center',
		icon: ({size, color}: IconType) => makeIcon({name: helpCenter, size, color, type: 'img'})
	},
	{
		path: 'settings/index',
		title: 'Settings',
		label: 'Settings',
		icon: ({size, color}: IconType) => makeIcon({name: 'settings-outline', size, color})
	},
	{
		path: 'terms/index',
		title: 'Terms & Conditions',
		label: 'Terms & Conditions',
		icon: ({size, color}: IconType) => makeIcon({name: tnc, size, color, type: 'img'})
	},
	{
		path: 'signout/index',
		title: 'Signout',
		label: 'Signout',
		icon: ({size, color}: IconType) => makeIcon({name: 'logout', size, color, type: 'material'})
	},
];

