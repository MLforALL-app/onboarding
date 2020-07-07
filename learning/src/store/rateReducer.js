const initState = {};

const rateReducer = (state = initState, action) => {
	switch (action.type) {
		case "NOTHING":
			return state;
		default:
			return state;
	}
};

export default rateReducer;
