import React from "react";
// This will allow us to have multiple pages
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import the components we're going to use
import Welcome from "./components/welcome";
import Lost from "./components/lost";
import Leaderboard from "./components/leaderboard";
import Rating from "./components/rating";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/leaderboard" component={Leaderboard} />
					<Route exact path="/rating" component={Rating} />
					<Route component={Lost} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
