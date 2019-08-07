import React from 'react';

import axios from 'axios';
export const login = (username, password) => {

	/*return (dispatch) => {
		axios.post("http://172.16.2.171:3000/user/login", { username, password })
			.then((result)=>{		
				dispatch({
				type: "LOGIN_SUCCESS",
				data: {username: username}
				});			
			});
	};*/

	return (dispatch) => {
	
		fetch('http://192.168.137.32:3000/user/login', {
			method: 'POST',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			username: username,
			password: password,
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if(responseJson.success>0){
				dispatch({
					type: "LOGIN_SUCCESS",
					data: {username: username}
				});	
			}
		})
		.catch((error) =>{
		});
	}
}