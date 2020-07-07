import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import rateReducer from "./rateReducer";

// TODO: add rateReducer
const rootReducer = combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default rootReducer;
