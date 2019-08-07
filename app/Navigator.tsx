import React from 'react';

import Login from './components/Login';
import Local from './components/Local';
import App from './App';
import CreateAccount from './components/CreateAccount';
import VerifyOTP from './components/VerifyOTP';
import BottomTabNavigation from './navigation/BottomTabNavigation';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';

const AppNavigator = createStackNavigator(
	{	
		First: {screen: App},
		Login: { screen: Login},
		Local: { screen: Local},
		CreateAccount: { screen: CreateAccount},
		VerifyOTP: { screen: VerifyOTP},
		BottomTabNavigation: { screen: BottomTabNavigation}
	},
	{ headerMode: 'none' },
	{ initialRouteName: 'App' }
);

export default createAppContainer(AppNavigator);