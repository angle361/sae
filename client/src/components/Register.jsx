import { useState } from 'react';
import React from "react";
import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const backend_url = process.env.REACT_APP_BACKEND_PROD_URL ;

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(`${backend_url}register`, {
			username: email,
			password: password,
			});
			if (response.status === 200) {
				console.log("User registered successfully");
				alert("User Registered");
				window.location.replace("/");
			}
		} catch (error) {
			
			console.error('Registeration error:', error);
		}
	};
	return (

		<div style={{ paddingTop: "80px" }}>

			<div className="form-container">

				<div className="signup-container">

					<form id="form" className="form" action="" method="POST" onSubmit={handleFormSubmit}>
						<h2>Not a User? Register With Us</h2>
						{/* <div className="form-contrl">
							<label for="username">Username*</label>
							<input type="text" id="username" value="username" placeholder="Enter username" />
							<small>Error message</small>
						</div> */}
						<div className="form-contrl">
							<label for="email">Email*</label>
							<input type="text" id="email" name ="username" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} require/>
							<small>Error message</small>
						</div>
						<div className="form-contrl">
							<label for="password">Password*</label>
							<input type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} require/>
							<small>Error message</small>
						</div>
						<button type="submit">Signup</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
