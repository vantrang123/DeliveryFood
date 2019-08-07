import React from 'react';

import store from './store/store';
import {Provider} from 'react-redux';

import Login from './components/Login';

const App = () => {

	return (
		<Provider store={store}>
			<Login />			
		</Provider>
	)
}

export default App;