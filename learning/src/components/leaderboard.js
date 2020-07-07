import React, { useState } from "react";
// time formatting
import moment from "moment";
// Allows us to connect to firestore
import { firestoreConnect } from "react-redux-firebase";
// Allows us to link to redux
import { connect } from "react-redux";
// Allows us to combine connectors with components
import { compose } from "redux";
// Import action
import { updateRate } from "../store/rateActions";

// Helper function to average an array of numbers
const getScore = (ratings) => {
	return (ratings.reduce((x, y) => x + y, 0) / ratings.length).toFixed(3);
};

// React Component to describe each pet
// note that we take in a pet, and some Redux action "update"
const DescribePet = ({ pet, update }) => {
	// when using the useState hook, this becomes same as
	// state = { score : 0 }
	// and setScore is the same as
	// (x) => this.setState({ score: x })
	// TODO: init state

	// TODO: event handler for taking input numbers

	// TODO: event handler that calls our Redux action

	// if pet just makes sure we load these things when pet != null
	if (pet) {
		return (
			<li>
				<p> TODO: Format nicely </p>
			</li>
		);
	} else {
		return <p> Loading... </p>;
	}
};

// ListPets is a react component
// Its props are a list of pets and some redux function "update"
const ListPets = ({ pets, update }) => {
	return (
		<div style={{ paddingLeft: "20vw", paddingRight: "20vw" }}>
			<ul>
				{pets &&
					pets.map((p) => {
						return (
							<div key={p.id}>
								<DescribePet pet={p} update={update} />
							</div>
						);
					})}
			</ul>
		</div>
	);
};

const Leaderboard = (props) => {
	// and so our leaderboard component returns a list of pets
	// this is called "destructuring" an object. Makes syntax nicer
	// note that we are able to access "pets / rateError" because of our mapStateToProps
	// and that we are able to access "updateRate" because of our mapDispatchToProps
	const { pets, updateRate } = props;
	return (
		<div>
			<div style={{ backgroundColor: "#ffcc00" }}>
				<p> TODO: Display something from the Redux Store here </p>
			</div>
			<h1>Leaderboard (not really)</h1>
			<ListPets pets={pets} update={updateRate} />
		</div>
	);
};

// This maps a dispatch to our props. A dispatch takes a function, and will
// first let the reducer know it's doing this function before doing it.
// Note that you need to first import the specific action (in our case updateRate)
// to pass it in to this dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		// TODO: finish mapDispatchToProps
	};
};

// This allows us to pick certain things from our global state and pass them in
// to this component as props. Here we are choosing the firestore collection "pets"
const mapStateToProps = (state) => {
	// TODO: finish mapStateToProps
};

// compose is a higher order component, that takes in connectors and combines
// them with react components to make them usable in the store

const mappers = connect(mapStateToProps, mapDispatchToProps);
const fstoreConnect = firestoreConnect([
	{ collection: "pets", orderBy: ["ratings", "desc"] }
]);
export default compose(mappers, fstoreConnect)(Leaderboard);
