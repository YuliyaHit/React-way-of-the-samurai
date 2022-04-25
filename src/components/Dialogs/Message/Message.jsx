import React from "react";
import cls from './Message.module.css';

const Message = (props) => {

	return (
		<div className={cls.message__wrapper}>
			<div className={cls.message__dot}></div>
			<div className={cls.message}>{props.message}</div>
		</div>

	)
}

export default Message;


