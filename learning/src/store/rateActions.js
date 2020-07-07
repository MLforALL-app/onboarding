export const updateRate = (petID, newRatings) => {
	return (dispatch, getState, { getFirestore }) => {
		console.log("petID", petID);
		console.log("newRatings", newRatings);
		const firestore = getFirestore();
		console.log(firestore);
		firestore
			.collection("pets")
			.doc(petID)
			.set(
				{
					ratings: newRatings,
					lastVote: firestore.FieldValue.serverTimestamp()
				},
				{ merge: true }
			)
			.then((snapshot) => {
				console.log("Snapshot", snapshot);
				dispatch({ type: "RATE" });
			})
			.catch((err) => {
				console.log("Error", err);
				dispatch({ type: "RATE_ERROR" });
			});
	};
};
