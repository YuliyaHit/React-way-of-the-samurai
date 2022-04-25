import React from 'react';
import classes from './Friend.module.css';

const Friend  = (props) => {
	let srcAtr = "https://ava-24.com/_ph/143/2/" + props.imgUrl;

	return (
				<div className={classes.friend}>
					<img src={srcAtr} alt="friend" className={classes.friend__img}/>
					<div className={classes.friend__name}>{props.name}</div>
				</div>
	)
};

export default Friend;