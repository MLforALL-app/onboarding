// Default create-react-app imports
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Imports needed for setting up firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// Imports to set up redux
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
	reduxFirestore,
	getFirestore,
	createFirestoreInstance
} from "redux-firestore";

// get this from Settings -> General -> Firebase SDK Snippet (Bottom of general page)
// select "Config"
// copy and paste that here

const firebaseConfig = {
	apiKey: "AIzaSyAWfdcq4rKG0pI8INotkcV0qbzXiizWDrc",
	authDomain: "onboarding-42e40.firebaseapp.com",
	databaseURL: "https://onboarding-42e40.firebaseio.com",
	projectId: "onboarding-42e40",
	storageBucket: "onboarding-42e40.appspot.com",
	messagingSenderId: "530040562623",
	appId: "1:530040562623:web:a6153e5c9afbd20cd7b70a",
	measurementId: "G-ER7X9KNCQY"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.storage();

// https://www.youtube.com/watch?v=gf5bVfVlNUM&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=17

// This initializes the store
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reduxFirestore(firebase, firebaseConfig)
	)
);

// These are props we provide our React Redux Firebase Provider
const rrfProps = {
	firebase,
	config: firebaseConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
};

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
