import React from "react";
import classes from './Post.module.css';

const Post  = (props) => {
	return (
    	<div className= {classes.item}>
		    <img src="https://s.kaskus.id/images/2020/06/03/10282368_202006030432480440.jpg" alt=""/>
		    {props.message}
    	</div>

	)
};

export default Post;