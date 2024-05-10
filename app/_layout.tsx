import {View} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";
import {routes} from "./routes";
import HeaderIcon from "@/components/drawer/HeaderIcon";
import {CustomDrawerContent} from "@/components/drawer/CustomDrawer";
import {appBrown} from "@/components/styles/shared";
import {drawerStyles} from "@/components/styles/drawer";
import RightIcons from "@/components/headerIcons/RightIcons";

export default function Root() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
				drawerContent={CustomDrawerContent}
        screenOptions={({ route, navigation }) => ({
          headerLeft: (props) => <HeaderIcon onPress={() => navigation.toggleDrawer()} />,
					headerRight: (props) => route.name !== 'index' ? null : <RightIcons route={route} navigation={navigation}/>
        })}
      >
        {routes.map((route) => {
          return (
            <Drawer.Screen
              key={route.path}
              name={route.path}
              options={{
                drawerLabel: route.label,
                title: route.title,
                headerTitle: route.title ? undefined : () => <View />,
								drawerIcon: ({size, color}) => route.icon({size, color}),
								drawerActiveTintColor: 'white',
								drawerLabelStyle: {color: appBrown, fontSize: 12},
								drawerItemStyle: drawerStyles.drawerItemStyle,
              }}
            />
          );
        })}
      </Drawer>
    </GestureHandlerRootView>
  );
}
