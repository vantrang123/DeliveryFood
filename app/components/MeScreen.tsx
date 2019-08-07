import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Metrics from '../config/metrics';

const MeScreen = () => {
	return (
		<View>
			<View style={{...styles.line,height: Metrics.screenHeight / 3, borderTopColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
				<View>
					<Image resizeMode={'cover'} source={require('../images/avatar.jpg')} style={styles.avatar} />					
				</View>
				<Text>Emelia</Text>
				<Text style={{color: '#a9a9a9'}}>abcd@gmail.com</Text>
			</View>

			<View style={{...styles.line,height: Metrics.screenHeight / 4}}>
				<View style={styles.list1}>
					<View style={{flexDirection: 'row'}}>
						<Icon name="user-circle" size={20} color={'#626262'}/>
						<Text style={{marginLeft: 10}}>My Details</Text>
					</View>
					
					<Icon name="chevron-right" size={10} color={'#626262'}/>
				</View>

				<View style={styles.list1}>
					<View style={{flexDirection: 'row'}}>
						<Icon name="credit-card" size={20} color={'#626262'}/>
						<Text style={{marginLeft: 10}}>Payment Methods</Text>					
					</View>
					
					<Icon name="chevron-right" size={10} color={'#626262'}/>
				</View>

				<View style={styles.list1}>
					<View style={{flexDirection: 'row'}}>
						<Icon name="map-marker" size={20} color={'#626262'}/>
						<Text style={{marginLeft: 17}}>Delivery Addresses</Text>						
					</View>
					
					<Icon name="chevron-right" size={10} color={'#626262'}/>
				</View>
			</View>

			<View style={{...styles.line,height: Metrics.screenHeight / 12,paddingHorizontal: 15,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',}}>
					<View style={{flexDirection: 'row'}}>
						<Icon name="drivers-license-o" size={20} color={'#626262'}/>
						<Text style={{marginLeft: 10}}>Account Credits</Text>
					</View>
				
				<Icon name="chevron-right" size={10} color={'#626262'}/>
			</View>

			<View style={{...styles.line,height: Metrics.screenHeight / 12,paddingHorizontal: 15,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',}}>
					<View style={{flexDirection: 'row'}}>
						<Icon name="sign-out" size={20} color={'#626262'}/>
						<Text style={{marginLeft: 10}}>Log Out</Text>
					</View>
				
				<Icon name="chevron-right" size={10} color={'#626262'}/>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	line: {
		borderWidth: 0.5,
		borderTopColor: '#91f29e',
		borderBottomColor: '#91f29e',
		borderLeftColor: 'white',
		borderRightColor: 'white',
		marginBottom: 15,
	},
	list1: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: Metrics.screenHeight / 12,
		marginLeft: 15,
		marginRight: 15,
		borderWidth: 0.5,
		borderBottomColor: '#91f29e',
		borderLeftColor: 'white',
		borderRightColor: 'white',
		borderTopColor: 'white',
	},
	avatar: {
		borderRadius: 40,
		borderWidth: 0.5,
		borderColor: '#91f29e',
		height: 80,
		width: 80,
	},


});
export default MeScreen;