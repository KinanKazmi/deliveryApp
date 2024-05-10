import React from "react";
import { Pressable, Image } from "react-native";
import {drawerStyles} from "@/components/styles/drawer";
const menuIcon = require('@/assets/images/menu.png');

const HeaderIcon = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={() => onPress()} style={drawerStyles.iconContainer}>
      <Image
        style={drawerStyles.iconStyle}
				source={menuIcon}
      />
    </Pressable>
  );
};

export default HeaderIcon;
