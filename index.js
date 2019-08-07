/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './app/Navigator';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
