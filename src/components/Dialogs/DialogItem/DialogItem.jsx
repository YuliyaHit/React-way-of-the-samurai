import React from "react";
import cls from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const activeLink = ({ isActive }) => isActive ? `${cls.activeLink}` : `${cls.item}`;

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
	<div className={cls.dialog}>
		<img src='https://ava-24.com/_ph/143/2/367065624.jpg?1649349755' alt="photo" className={cls.dialog__img}/>
		<NavLink to={path} className={activeLink} >{props.name}</NavLink>
	</div>
)
}


export default DialogItem;


