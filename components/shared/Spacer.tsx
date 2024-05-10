import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = ({small}: {small?: boolean}) => {
	return (
		<View style={small? styles.spacerStyleSmall : styles.spacerStyle} />
	)
}

const styles = StyleSheet.create({
  spacerStyle: {
		marginVertical: 10
  },
  spacerStyleSmall: {
		marginVertical: 5
  },
});

export default Spacer;