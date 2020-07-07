import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import rateReducer from "./rateReducer";

const rootReducer = combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	rate: rateReducer
});

export default rootReducer;
