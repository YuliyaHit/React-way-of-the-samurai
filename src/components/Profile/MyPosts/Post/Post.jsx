import React from "react";
import classes from './Post.module.css';

const Post  = (props) => {
	debugger
	return (
    	<div className= {classes.item}>
		    <div><img src="https://s.kaskus.id/images/2020/06/03/10282368_202006030432480440.jpg" alt=""/>
		    {props.message}
		    </div>
		    <span>likes:{props.likesCount}</span>
    	</div>

	)
};

export default Post;