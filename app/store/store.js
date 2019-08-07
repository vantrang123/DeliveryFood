import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import {loginReducer} from "./reducers/login_reducer";

const store = createStore(
	combineReducers({
		login: loginReducer
	}),
	applyMiddleware(thunk)
);
export default store;