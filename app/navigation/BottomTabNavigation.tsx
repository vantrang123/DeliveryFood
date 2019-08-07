import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../components/HomeScreen';
import SearchScreen from '../components/SearchScreen';
import OrdersScreen from '../components/OrdersScreen';
import MeScreen from '../components/MeScreen';

const HomeTabIcon = ({tintColor}) => (
    <Icon name="home"  size={20} color={tintColor}/>
);
const SearchTabIcon = ({tintColor}) => (
    <Icon name="search" size={20} color={tintColor}/>
);
const OrdersTabIcon = ({tintColor}) => (
    <Icon name="shopping-bag" size={20} color={tintColor}/>
);
const MeTabIcon = ({tintColor}) => (
    <Icon name="user-circle" size={20} color={tintColor}/>
);

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null,
				tabBarIcon: HomeTabIcon
			}
		},
		Search: {
			screen: SearchScreen,
			navigationOptions: {
				header: null,
				tabBarIcon: SearchTabIcon
			}
		},
		Orders: {
			screen: OrdersScreen,
			navigationOptions: {
				header: null,
			   tabBarIcon: OrdersTabIcon
			}
		},
		Me: {
			screen: MeScreen,
			navigationOptions: {
				header: null,
			    tabBarIcon: MeTabIcon
			}
		}
	},
	{
		tabBarOptions: {
			showLabel: false,
		    activeTintColor: '#91f29e',
			inactiveTintColor: '#626262',
		    pressColor: '#7f8c8d'
		}
	}
);

export default createAppContainer(TabNavigator);