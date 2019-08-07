import React from 'react';
import {View, Text, TextInput, Keyboard,StyleSheet, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header_CreateAcc = () => {
	return (
		<View style={styles.container}>
			<View><Icon name="chevron-left" color={'#91f29e'} size={15}/></View>
			<View style={styles.title}>
				<View style={styles.textTitle}>
					<Text style={{fontFamily: 'Cochin', fontWeight: 'bold', fontSize:18, }}
						>VERIFY NUMBER
					</Text>
					<Text style={{fontFamily: 'sans-serif-thin', fontSize:14}}>OTP send to 012345678</Text>
				</View>

				<View style={{paddingRight:5}}>
					<Icon size={30} name='twitch' color={'#ffe699'}  />
				</View>
			</View>	
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#F5F5DC',
		paddingLeft: 15,
		paddingBottom: 20,
		paddingTop: 15,
		paddingRight: 30
	},
	title:	{
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 25,
		paddingRight: 25
	},
	textTitle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

});
export default Header_CreateAcc;