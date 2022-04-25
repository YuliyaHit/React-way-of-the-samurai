import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts  = (props) => {
	let postsElements = props.posts.map(post => <Post message= {post.message} key={props.id}/>);

	let newPostElement = React.createRef();

	let addPost =()=> {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return <div className={classes.posts__block}>
		<h3 className={classes.posts__title}>My posts</h3>
		<div>
			<div>
				<textarea ref={newPostElement} onChange={onPostChange} className={classes.posts__field} value={props.newPostText} />
			</div>
			<div>
				<button onClick={ addPost }  className={classes.posts__btn}>App Post</button>
			</div>
		</div>
    	<div className={classes.posts}>
		    {postsElements}
    	</div>
	</div>
};

export default MyPosts;