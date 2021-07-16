import React from "react";

function EventRegister() {
	return (

		<div style={{ paddingTop: "80px" }}>

			<div className="form-container">

				<div className="signup-container">

					<form id="form" className="form" action="/registerforevent" method="POST">
						<h2>Register for the event</h2>
						<div className="form-contrl">
							<label for="username">Username*</label>
							<input type="text" id="username" name ="username" placeholder="Enter username"  require/>
							<small>Error message</small>
						</div> 
						<div className="form-contrl">
							<label for="email">Email*</label>
							<input type="text" id="email" name ="email" placeholder="Enter email" require/>
							<small>Error message</small>
						</div>
						
						<button type="submit">Register</button>
					</form>
				</div>




			</div>
		</div>
	);
}

export default EventRegister;
