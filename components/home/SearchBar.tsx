import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { iconTint } from "../styles/shared";
import { AntDesign, Feather } from "@expo/vector-icons";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <TextInput
			placeholder={'search anything...'}
      style={styles.searchBar}
      value={search}
      onChangeText={(text) => setSearch(text)}
      underlineColor={"red"}
      activeUnderlineColor={iconTint}
      underlineColorAndroid={"red"}
      underlineStyle={{ backgroundColor: "transparent" }}
      left={
        <TextInput.Icon
          icon={() => <Feather name="camera" size={24} color="black" />}
          style={styles.leftIconStyle}
        />
      }
      right={
        <TextInput.Icon
          icon={() => <AntDesign name="search1" size={25} color="white" />}
					style={styles.rightIconStyle}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 10,
    borderWidth: 2,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderRadius: 40,
    width: '80%',
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
	leftIconStyle: {
		borderRightWidth: 1,
		borderColor: 'black',
		borderRadius: 0,
	},
	rightIconStyle: {
		right: '40%',
		width: 70,
		height: 50,
		borderRadius: 40,
		borderWidth: 1,
		backgroundColor: 'black',
	},
});

export default SearchBar;
