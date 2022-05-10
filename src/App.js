import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

	return (
	    <BrowserRouter>
            <div className= 'app-wrapper'>
        	    <Header />
        	    <Navbar />
			<div className = 'app-wrapper-content'>
				<Routes>
					<Route path="/dialogs/*" element={<DialogsContainer />} />
					<Route path="/profile" element={ <Profile />} />
				</Routes>
			</div>
        </div>
		</BrowserRouter>
  );
}

export default App;
