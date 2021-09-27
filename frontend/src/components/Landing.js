import React from 'react'
import "../styles/landing.css"
import db from "../img/db.png"
import bronto from "../img/bronto.png"

const Landing = () => {
	return (
		<div id="landing" className="container-fluid">
			<div id="landing-background">
			</div>
			<div id="content" className="container-fluid"></div>
			<h3 className="display-1 title">Simon's image repository</h3>
			<h5 className="display-6 motto">With a special touch of Machine Learning!</h5>
			<a className="btn btn-outline-info btn-lg" href="/login" id="login-btn">Login</a> 
			<a className="btn btn-outline-warning btn-lg" href="/create_user" id="create-btn">Create an account</a>
		</div>
	)
}

export default Landing