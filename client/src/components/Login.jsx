import React ,{useContext} from "react";
import { StateContext } from './StateProvider';

function Login() {

	  
	return (

		<div style={{ paddingTop: "80px" }}>

			<div className="form-container">

				<div className="signin-container">
					<form id="form" className="form"  action="/login" method="POST">
						<h2>Already a User? Login</h2>
						<div className="form-contrl">
							<label>Email*</label>
							<input type="text" id="email" name ="username" placeholder="Enter email" />
							<small>Error message</small>
						</div>
						<div className="form-contrl">
							<label>Password*</label>
							<input type="password" id="password" name ="password" placeholder="Enter password" />
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

// "scripts": {
//     "client": "cd client && npm start",
//     "server": "nodemon server.js",
//     "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\"",
//     "dev:server": "cd client && yarn build && cd .. && yarn start",
//     "start": "node server.js",
//     "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
//   },