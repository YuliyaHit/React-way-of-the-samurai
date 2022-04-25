import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";



const Profile  = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts}
					newPostText= {props.state.newPostText}
					updateNewPostText={props.updateNewPostText}
					addPost={props.addPost} />
		</div>
	)
};

export default Profile;