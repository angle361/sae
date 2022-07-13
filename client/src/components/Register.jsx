import React from "react";

function Register() {
	return (

		<div style={{ paddingTop: "80px" }}>

			<div className="form-container">

				<div className="signup-container">

					<form id="form" className="form" action="/register" method="POST">
						<h2>Not a User? Register With Us</h2>
						{/* <div className="form-contrl">
							<label for="username">Username*</label>
							<input type="text" id="username" value="username" placeholder="Enter username" />
							<small>Error message</small>
						</div> */}
						<div className="form-contrl">
							<label for="email">Email*</label>
							<input type="text" id="email" name ="username" placeholder="Enter email" require/>
							<small>Error message</small>
						</div>
						<div className="form-contrl">
							<label for="password">Password*</label>
							<input type="password" id="password" name="password" placeholder="Enter password" require/>
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
