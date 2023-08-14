import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
	bigText: {
		fontSize: 20,
	},
	mediumText: {
		fontSize: 12,
	},
	smallText: {
		fontSize: 10,
	},
	bigIcon: {
		width: 20,
	},
	mediumIcon: {
		width: 20,
	},
	smallIcon: {
		width: 20,
	},
	row: {
		flexDirection: 'row',
	},
	whiteText: {
		color: 'white',
	},
	blackText: {
		color: 'black',
	},
})

function AppName({
	bigText,
	mediumText,
	smallText,
	bigIcon,
	mediumIcon,
	smallIcon,
	row,
	whiteText,
	blackText,
}) {
	const textStyles = [
		bigText && styles.bigText,
		mediumText && styles.mediumText,
		smallText && styles.smallText,
		row && styles.row,
		whiteText && styles.whiteText,
		blackText && styles.blackText,
	]

	const imageStyles = [
		bigIcon && styles.bigIcon,
		mediumIcon && styles.mediumIcon,
		smallIcon && styles.smallIcon,
	]

	return (
		<View>
			<Image source={'../../../assets/[pomo-logo.svg'} style={imageStyles}>
				{' '}
			</Image>
			<Text style={textStyles}> Pomo </Text>
		</View>
	)
}

export default AppName
