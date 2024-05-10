import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { drawerStyles } from "@/components/styles/drawer";
import { iconTint } from "@/components/styles/shared";

const cross = require("@/assets/images/close-circle.png");
const profileImg =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

const MainDrawerView = ({ closeDrawer }: { closeDrawer: () => void }) => {
  return (
    <View style={drawerStyles.profileAreaContainer}>
      <View style={drawerStyles.closeAndTitle}>
        <TouchableOpacity
          onPress={() => closeDrawer()}
          style={drawerStyles.drawerCloseContainer}
        >
          <Image
            style={[drawerStyles.crossStyle, drawerStyles.menuIconStyle]}
            source={cross}
          />
        </TouchableOpacity>
        <View style={drawerStyles.oneFlex}>
          <Text style={drawerStyles.titleText}> Profile </Text>
        </View>
        <View style={drawerStyles.oneFlex} />
      </View>
      <TouchableOpacity style={drawerStyles.profileImageSection}>
        <Image
          source={{ uri: profileImg }}
          style={drawerStyles.profileImageStyle}
        />
        <View style={drawerStyles.editIconContainer}>
          <MaterialCommunityIcons
            name={"square-edit-outline"}
            size={16}
            color={iconTint}
          />
        </View>
      </TouchableOpacity>
      <Text style={drawerStyles.titleText} onPress={() => closeDrawer()}>
        Super Girl
      </Text>
    </View>
  );
};

export default MainDrawerView;
