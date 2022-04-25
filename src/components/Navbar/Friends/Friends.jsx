import React from 'react';
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends  = (props) => {

	let friendList = props.state.map(item => <Friend name={item.name} imgUrl={item.imgUrl} />);
	return (

		<div className="friends">
			<div className={classes.friends__title}>Friends</div>
			<div className={classes.friends__wrapper}>
				{friendList}
			</div>
		</div>
	)
};

export default Friends;