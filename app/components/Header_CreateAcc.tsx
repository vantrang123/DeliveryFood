import React from 'react';
import {View, Text, TextInput, Keyboard,StyleSheet, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header_CreateAcc = () => {
	return (
		<View style={styles.container}>
			<View><Icon name="chevron-left" color={'#91f29e'} size={15}/></View>

			<View style={styles.title}>
				<View style={styles.textTitle}>
					<Text style={{fontFamily: 'Cochin', fontWeight: 'bold', fontSize:18}}
						>CREATE ACCOUNT
					</Text>
					<Text style={{fontFamily: 'sans-serif-thin', fontSize:14}}
						>Create an account with the new phone number
					</Text>
				</View>
				<Text style={{textAlign:'right'}}>
					<Icon size={30} name='coffee' color={'#ffe699'}  />
				</Text>
			</View>	
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: '#F5F5DC',
		paddingLeft: 15,
		paddingTop: 15,
		paddingRight: 30,
		paddingBottom: 20,
	},
	title:	{
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingTop: 15,
		paddingRight: 25
	},
	textTitle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

});
export default Header_CreateAcc;