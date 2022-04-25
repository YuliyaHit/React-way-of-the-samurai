import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {addPost, sendNewMessage} from "./redux/state";

const App = (props) => {

	return (
	    <BrowserRouter>
            <div className= 'app-wrapper'>
        	    <Header />
        	    <Navbar state={props.state.sideBarPage} />
			<div className = 'app-wrapper-content'>
				<Routes>
					<Route path="/dialogs/*" element={<Dialogs
						state={props.state.dialogsPage}
						updateNewMessageText={props.updateNewMessageText}
						sendNewMessage={props.sendNewMessage}/>} />
					<Route path="/profile" element={<Profile
						state={props.state.profilePage}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText}/>} />
				</Routes>
			</div>
        </div>
		</BrowserRouter>
  );
}

export default App;
