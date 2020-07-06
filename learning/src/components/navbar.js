import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav>
			<NavLink to="/">
				<h4>Welcome</h4>
			</NavLink>
			<NavLink to="/rating">
				<h4>Rate Here</h4>
			</NavLink>
			<NavLink to="/leaderboard">
				<h4>Leaderboard</h4>
			</NavLink>
		</nav>
	);
};

export default Navbar;
