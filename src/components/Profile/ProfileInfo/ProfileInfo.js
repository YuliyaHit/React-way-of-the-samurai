import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo  = () => {
	return (
		<div>
			<div>
				<img src="https://img4.goodfon.ru/original/800x480/e/d2/peizazh-ozero-voda-derevia-tahoe.jpg" alt="img" />
			</div>
		<div className ={classes.descr__block}>
			ava+ descr
		</div>

		</div>
	)
};

export default ProfileInfo;