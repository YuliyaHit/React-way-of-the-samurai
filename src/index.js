import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import App from "./App";
import {Provider} from "./storeContext";


export let rerenderEntireTree = (state) => {

	ReactDOM.render(
		<Provider store={store}>
			<React.StrictMode> <App state={state} dispatch={store.dispatch.bind(store)} store = {store} /> </React.StrictMode>
		</Provider>, document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe( () => {
	rerenderEntireTree();
});