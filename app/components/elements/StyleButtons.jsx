import React from 'react'

import { Alert, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		color: 'white',
	},
	bigFont: {
		fontSize: 20,
	},
	smallFont: {
		fontSize: 10,
	},
	bold: {
		fontWeight: 'bold',
	},
	bgSuccess: {
		backgroundColor: 'green',
	},
	bgFailed: {
		backgroundColor: 'red',
	},
})

export default function StyledButton({
	title,
	text,
	bigFont,
	smallFont,
	bold,
	bgSuccess,
	bgFailed,
	children,
}) {
	const textStyles = [
		styles.text,
		bigFont && styles.bigFont,
		smallFont && styles.smallFont,
		bold && styles.bold,
		bgSuccess && styles.bgSuccess,
		bgFailed && styles.bgFailed,
	]
	return (
		<Button
			style={textStyles}
			title={title}
			onPress={() => Alert.alert('holis uwu')}
		></Button>
	)
}
