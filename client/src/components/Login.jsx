import React from "react";

function Login() {
	return (
		// 
		<div style={{ paddingTop: "80px" }}>
		
			<div ClassName="form-container">
				<div ClassName="container">
					<form id="form" ClassName="form">
						<h2>Register With Us</h2>
						<div ClassName="form-contrl">
							<label for="username">Username</label>
							<input type="text" id="username" placeholder="Enter username" />
							<small>Error message</small>
						</div>
						<div ClassName="form-contrl">
							<label for="email">Email</label>
							<input type="text" id="email" placeholder="Enter email" />
							<small>Error message</small>
						</div>
						<div ClassName="form-contrl">
							<label for="password">Password</label>
							<input type="password" id="password" placeholder="Enter password" />
							<small>Error message</small>
						</div>
						<div ClassName="form-contrl">
							<label for="password2">Confirm Password</label>
							<input
								type="password"
								id="password2"
								placeholder="Enter password again"
							/>
							<small>Error message</small>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

// "scripts": {
//     "client": "cd client && npm start",
//     "server": "nodemon server.js",
//     "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\"",
//     "dev:server": "cd client && yarn build && cd .. && yarn start",
//     "start": "node server.js",
//     "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
//   },