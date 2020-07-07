import React, { useState } from "react";
// time formatting
import moment from "moment";
// Allows us to connect to firestore
import { firestoreConnect } from "react-redux-firebase";
// Allows us to link to redux
import { connect } from "react-redux";
// Allows us to combine connectors
import { compose } from "redux";
// Import action
import { updateRate } from "../store/rateActions";

const getScore = (ratings) => {
	return ratings.reduce((x, y) => x + y, 0) / ratings.length;
};

const DescribePet = ({ pet, update }) => {
	const [score, setScore] = useState(0);
	const numHandler = (event) => {
		event.preventDefault();
		console.log(event);
		setScore(Number(event.target.value));
	};
	const submitHandler = () => {
		var newRatings = Object.values(pet.ratings);
		newRatings.push(score);
		update(pet.id, newRatings);
	};
	if (pet) {
		return (
			<li>
				<b>{pet.name}</b> has an average rating of{" "}
				<b>{getScore(pet.ratings)}</b> with a total of {pet.ratings.length}{" "}
				votes, the most recent one from{" "}
				{pet.lastVote && moment(pet.lastVote.toDate()).fromNow()}
				<img
					style={{ width: "50rem", height: "30rem", objectFit: "contain" }}
					alt={pet.name + "_image"}
					src={pet.storageRef}
				/>{" "}
				<input type="number" onChange={numHandler} />
				<button onClick={submitHandler}>Submit</button>
			</li>
		);
	} else {
		return <p> Loading... </p>;
	}
};

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
	return (
		<div>
			<h1>Leaderboard (not really)</h1>
			<ListPets pets={props.pets} update={props.updateRate} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateRate: (petID, newRatings) => dispatch(updateRate(petID, newRatings))
	};
};

const mapStateToProps = (state) => {
	console.log("State", state);
	return {
		pets: state.firestore.ordered.pets
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{ collection: "pets", orderBy: ["ratings", "desc"] }])
)(Leaderboard);
