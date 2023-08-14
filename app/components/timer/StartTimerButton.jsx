import React from 'react'
import {
	SafeAreaView,
	//	StyleSheet,
} from 'react-native'
import StyledButton from '../elements/StyleButtons'
// import COLORS from '../../../constans/COLORS'

function StartTimerButton() {
	return (
		<SafeAreaView style={{ margin: 30 }}>
			<StyledButton bold small bgSuccess title="uwusito"></StyledButton>
		</SafeAreaView>
	)
}

export default StartTimerButton
