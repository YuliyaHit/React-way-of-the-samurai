import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import state, {addPost, sendNewMessage, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import App from "./App";

export let rerenderEntireTree = (state) => {
	ReactDOM.render( <React.StrictMode> <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendNewMessage = {sendNewMessage} updateNewMessageText = {updateNewMessageText}/> </React.StrictMode>,
		document.getElementById('root')
);
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);