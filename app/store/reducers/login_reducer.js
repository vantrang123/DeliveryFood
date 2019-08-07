const initial_state = {
	user_name: '',
};


export const loginReducer = (state=initial_state, action) =>{
	switch(action.type){
		case "LOGIN_SUCCESS":
			return {
				...state,
				user_name: action.data.username
			};
		default:
			return state;
	}
}