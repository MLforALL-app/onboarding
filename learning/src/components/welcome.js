import React from "react";
import logo from "../pictures/Square logo.jpg";
import len from "../pictures/len.jpg";
import "../App.css";

function Welcome() {
	return (
		<div className="App">
			<img src={logo} alt="logo" />
			<h1> Welcome to MLforALL React Redux Firebase Onboarding! </h1>
			<img src={len} alt="len" style={{ height: "10rem" }} />
			<h2> Made by Len Huang </h2>
		</div>
	);
}

export default Welcome;
