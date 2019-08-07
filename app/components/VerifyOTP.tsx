import React from 'react';
import {View, Text, TextInput, Keyboard,TouchableWithoutFeedback,StyleSheet,Button, TouchableHighlight} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import Header_OTP from './Header_OTP';
import Local from './Local';

const VerifyOTP = ({navigation}) => {
	
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			
			<View style={styles.container}>		
				<View style={{height: '60%', justifyContent: 'flex-start'}}>
					<Header_OTP />
					<View style={styles.areaInput}>
						<TextInput style={styles.formInput} />
						<TextInput style={styles.formInput} />
						<TextInput style={styles.formInput} />
						<TextInput style={styles.formInput} />
					</View>				
				</View>

				<View style={{height:'40%',justifyContent: 'flex-end', paddingBottom:25}}>
					<TouchableHighlight style={styles.button} 
						onPress={
							() => navigation.dispatch(StackActions.reset({
								index: 0,
								actions: [NavigationActions.navigate({ routeName: 'Local' })],
							}))
						}>
						<Text style={{color: 'white'}}>ENTER OTP</Text>
					</TouchableHighlight>
				</View>								
			</View>
		</TouchableWithoutFeedback>
	)
}

/*const AppNavigator = createStackNavigator({
	VerifyOTP: { screen: VerifyOTP},
	Local: { screen: Local}},
	{ headerMode: 'none' },
	{ initialRouteName: 'VerifyOTP' }
);*/

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',   
		justifyContent: 'flex-start',
		height: '100%'
	},
	areaInput: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	formInput: {
		width: 40,
		borderBottomWidth: 0.5,
		margin: 10
	},
	button: {
		marginTop: 5,
		borderRadius: 25,
		borderWidth: 0.35,
		alignItems: 'center',
		padding: 10,
		borderColor: 'white',
		backgroundColor: '#91f29e',
		marginHorizontal: 15
	}
});

//export default createAppContainer(AppNavigator);
export default VerifyOTP;