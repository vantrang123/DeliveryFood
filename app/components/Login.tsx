import React from 'react';
import {View, Text, TextInput, Keyboard,TouchableWithoutFeedback,StyleSheet, Image, Button, TouchableHighlight} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


import CreateAccount from './CreateAccount'
import Local from './Local';
import {login} from '../store/actions/login_action';
import store from '../store/store';

class Login extends React.Component {

	constructor(props){	
		super(props);
		this.state = {
			username: "",
			password: "",
		};
	}

	render(){
		const {navigation, loginStatus} = this.props;
		if (!!loginStatus) {
			return navigation.dispatch(StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: 'Local' })],
			}));
		}

		return (			
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>			
					<View style={styles.containerView}>
						<View style={styles.areaTop}>
							<Text style={styles.logoText}>DeliveryFood</Text>
						</View>
					
						<View style={styles.areaLogin}>				
							<TextInput 
								onChangeText={(value)=>{
									this.setState({
										username: value
									})
								}}
								placeholder="Username" 
								placeholderColor="#c4c3cb" 
								style={styles.formInput} />

							<TextInput 
								onChangeText={(value)=>{
									this.setState({
										password: value
									})
								}}
								placeholder="Password" 
								placeholderColor="#c4c3cb"
								style={styles.formInput} secureTextEntry={true} />

							<TouchableHighlight 
								style={{...styles.button, backgroundColor: '#91f29e'}} 
								onPress={() =>	{					
										this.props.loginAction(this.state.username, this.state.password);
								
									}
								}>
								<Text style={{color: 'white'}}>SIGN IN</Text>
							</TouchableHighlight>				
						</View>
						
						<View style={{justifyContent: 'center'}}>
							<Text>Sign in with:</Text>
							<View style={styles.areaLoginWith}>
								<TouchableHighlight style={{...styles.buttonCircle, backgroundColor: '#00bfff'}}>
									<Icon name="facebook" color={'white'} size={18}/>
									
								</TouchableHighlight>

								<TouchableHighlight style={{...styles.buttonCircle, backgroundColor: '#ffa480'}}>
									<Icon name="google" color={'white'} size={18}/>
								</TouchableHighlight>
							</View>							
						</View>

						<View style={styles.areaBottom}>
							<View style={{flexDirection: 'row', justifyContent:'center'}}>
								<Text style={{fontFamily: 'Iowan Old Style'}}>Do you have an account?</Text>
								<Text style={{textDecorationLine: 'underline', marginLeft: 5, fontWeight: 'bold'}} 
									onPress={() => navigation.navigate('CreateAccount')}>Create Account
								</Text>			
							</View>
						</View>
					</View>
				
				</TouchableWithoutFeedback>						
		);
	}
}



const styles = StyleSheet.create({
	containerView:{
		display: 'flex',
		alignItems: 'stretch',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
		paddingLeft: 15,
		paddingRight: 15,
		
	},
	areaTop: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoText:{
		fontSize: 30,
		color: "#91f29e",
		fontWeight: 'bold',
		fontFamily: 'san-serif-condensed',
		marginTop: 20
	},
	areaLogin: {
		marginTop: 5,
	},
	formInput: {
		borderRadius: 25,
		borderWidth: 0.35,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		marginBottom: 5

	},
	button: {
		marginTop: 5,
		borderRadius: 25,
		borderWidth: 0.35,
		alignItems: 'center',
		padding: 10,
		borderColor: 'white'
	},
	buttonCircle: {
		marginTop: 5,
		borderRadius: 80,
		borderWidth: 0.35,
		alignItems: 'center',
		padding: 10,
		borderColor: 'white',
		height: 40,
		width: 40,
	},
	areaLoginWith: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: 95,
		paddingRight: 95,
	},
	areaBottom: {
		justifyContent: 'flex-end',
		paddingBottom: 25,
	}
});

const mapStateToProps = (store) =>{
	return {
		loginStatus: store.login.user_name
		
	};
};

const mapDispatchToProps = (dispatch) => ({
	loginAction: (username, password) => dispatch(login(username, password))

});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Login));
