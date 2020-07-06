import React from "react";
import { Link } from "react-router-dom";

/* This is a component that's used when a user tries to access an
 * invalid endpoint. */
const Lost = () => {
	return (
		<div>
			<h1> This is not the page you're looking for... go back </h1>
			<Link to="/">
				<button> Click Here </button>
			</Link>
		</div>
	);
};

export default Lost;
