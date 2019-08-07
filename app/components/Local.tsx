import React from 'react';
import {View, Text, TouchableHighlight,KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StyleSheet, TextInput} from 'react-native';
import MapView from 'react-native-maps';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import BottomTabNavigation from './BottomTabNavigation';


const Local = ({navigation}) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>		
			<View style={styles.container}>	
				<View style={styles.areaMap}>
					<MapView
						style={styles.map}
						showsUserLocation = {true} 
						followUserLocation = {true}
						zoomEnable={true}
					/>
				</View>
				
				<View style={styles.areaInput}>					
					<View style={styles.comment}>
						<Text style={{fontWeight: 'bold', fontSize: 14}}>Select Delivery Location</Text>
						<Text>Please enter an address or city name</Text>
					</View>
					
					<TextInput 
						style={styles.formInput} 
						placeholder='Please enter your address' 
						placeholderColor='#c4c3cb' 
					/>	
					
					<TouchableHighlight style={styles.button} onPress={() => navigation.navigate('BottomTabNavigation')}>
						<Text style={{color: 'white'}}>CONFIRM</Text>
					</TouchableHighlight>
				</View>								
			</View>		
		</TouchableWithoutFeedback>
	)
}

/*const AppNavigator = createStackNavigator({
	Local: { screen: Local},
	BottomTabNavigation: { screen: BottomTabNavigation}},
	{ headerMode: 'none' },
	{ initialRouteName: 'Local' }
);*/

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%'
	},
	areaMap: {
		height: '70%'
	},
	map: {
		height: '100%'
	},
	areaInput: {
		height: '30%',
		marginHorizontal: 20,
		justifyContent: 'flex-start'
	},
	comment: {
		alignItems: 'center',
		marginVertical: 10
	},
	formInput: {
		borderRadius: 25,
		borderWidth: 0.35,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10
	},
	button: {
		marginTop: 5,
		borderRadius: 25,
		borderWidth: 0.35,
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#91f29e',
		borderColor: 'white'
	}
});

//export default createAppContainer(AppNavigator);
export default Local;