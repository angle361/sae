import { useState } from 'react';
import React from "react";
import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

const backend_url = process.env.REACT_APP_BACKEND_PROD_URL ;

function Login() {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(`${backend_url}login`, {
			username: email,
			password: password,
			});
			if (response.status === 200) {
				console.log("User logged in");
				alert("User logged in");
				window.location.replace("/");
			}

		} catch (error) {
			
			console.error('Login error:', error);
		}
	};
	  
	return (

		<div style={{ paddingTop: "80px" }}>

			<div className="form-container">

				<div className="signin-container">
					<form id="form" className="form"  action="/login" method="POST" onSubmit={handleFormSubmit}>
						<h2>Already a User? Login</h2>
						<div className="form-contrl">
							<label>Email*</label>
							<input type="text" id="email" name ="username" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
							<small>Error message</small>
						</div>
						<div className="form-contrl">
							<label>Password*</label>
							<input type="password" id="password" name ="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
							<small>Error message</small>
						</div>
						<button type="submit">Login</button>
					</form>
				
				
				</div>


			</div>
		</div>
	);
}

export default Login;