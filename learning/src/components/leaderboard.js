import React from "react";
// Allows us to connect to firestore
import { firestoreConnect } from "react-redux-firebase";
// Allows us to link to redux
import { connect } from "react-redux";
// Allows us to combine connectors
import { compose } from "redux";
// Package for time formatting
import moment from "moment";

const ListPets = ({ pets }) => {
	return (
		<ul>
			{pets &&
				pets.map((p) => {
					console.log(p);
					return (
						<li key={p.id}>
							{p.name} has an average rating of {p.rating} with a total of{" "}
							{p.votes} votes, the most recent one from{" "}
							{moment(p.lastVote.toDate()).fromNow()}
						</li>
					);
				})}
		</ul>
	);
};

const Leaderboard = (props) => {
	console.log("props", props);
	return (
		<div>
			leaderboard:
			<ListPets pets={props.pets} />
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log("State", state);
	return {
		pets: state.firestore.ordered.pets
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "pets", orderBy: ["rating", "desc"] }])
)(Leaderboard);
