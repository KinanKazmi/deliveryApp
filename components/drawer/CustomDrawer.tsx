import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MainDrawerView from "@/components/drawer/MainDrawerView";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
			<MainDrawerView closeDrawer={() => props.navigation.closeDrawer()}/>
			<DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
    </DrawerContentScrollView>
  );
}

