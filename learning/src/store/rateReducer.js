const initState = {
	rateError: ""
};

const rateReducer = (state = initState, action) => {
	switch (action.type) {
		case "RATE":
			console.log("RATE");
			return { ...state, rateError: "way to vote" };
		case "RATE_ERROR":
			console.log("RATE_ERROR");
			return { ...state, rateError: "uh oh you dumbo" };
		default:
			return state;
	}
};

export default rateReducer;
