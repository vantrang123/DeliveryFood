import React from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, Keyboard,TouchableWithoutFeedback,StyleSheet, TouchableHighlight} from 'react-native';

import Header_CreateAcc from './Header_CreateAcc';
import VerifyOTP from './VerifyOTP';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const CreateAccount = ({navigation}) => {
	return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>			
			<View style={styles.containerView}>		
				<View style={styles.body}>	
					<Header_CreateAcc />
					<View style={styles.areaInput}>
						<TextInput placeholder="Mobile Number" placeholderColor="#c4c3cb" style={styles.formInput} />
						<TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.formInput} />							
						<TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.formInput} />
						<TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.formInput} secureTextEntry={true}/>					
					</View>
				</View>
				
				<View style={{justifyContent: 'flex-end', marginBottom: 25}}>
					<TouchableHighlight style={styles.button}  onPress={() => navigation.navigate('VerifyOTP')}>
						<Text style={{color: 'white'}}>CREATE ACCOUNT</Text>
					</TouchableHighlight>	
				</View>
			</View>			
			</TouchableWithoutFeedback>
	)
}

/*const AppNavigator = createStackNavigator({
	CreateAccount: { screen: CreateAccount},
	VerifyOTP: { screen: VerifyOTP}},
	{ headerMode: 'none' },
	{ initialRouteName: 'CreateAccount' }
);*/

const styles = StyleSheet.create({
	containerView:{
		display: 'flex',
		alignItems: 'stretch',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%'
	},
	body: {
		alignItems: 'stretch',
		justifyContent: 'space-between',
		flexDirection: 'column'
	},
	areaInput: {
		marginTop: 13,
		marginHorizontal: 15
	},
	formInput: {	
		borderBottomWidth: 0.35,
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: 10
	},
	button: {
		marginTop: 5,
		borderRadius: 25,
		borderWidth: 0.35,
		alignItems: 'center',
		padding: 10,
		borderColor: 'white',
		backgroundColor: '#91f29e',
		marginTop: 15,
		marginHorizontal: 15
	}
});

//export default createAppContainer(AppNavigator);
export default CreateAccount;