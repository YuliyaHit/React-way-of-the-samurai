import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from "../../storeContext";


const activeLink = ({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.item}`;

const Navbar  = (props) => {

	return <nav className = {classes.nav}>
		<div className = {classes.item}>
			<NavLink to="/profile"  className={activeLink} >Profile</NavLink>
		</div>
		<div className = {classes.item}>
			<NavLink to="/dialogs"  className={activeLink} >Messages</NavLink>
		</div>
		<div className = {classes.item}>
			<a >News</a>
		</div>
		<div className = {classes.item}>
			<a >Music</a>
		</div>
		<div className = {classes.item}>
			<a >Settings</a>
		</div>
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().friends;
				<Friends state={state}/>
			}}
		</StoreContext.Consumer>


	</nav>
};

export default Navbar;