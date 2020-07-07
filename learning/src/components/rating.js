import React from "react";
// Allows us to connect to firestore
import { firestoreConnect } from "react-redux-firebase";
// Allows us to link to redux
import { connect } from "react-redux";
// Allows us to combine connectors
import { compose } from "redux";

const Rating = (props) => {
	console.log("props", props);
	return <div> lmaoxdrating (wip) </div>;
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
)(Rating);
