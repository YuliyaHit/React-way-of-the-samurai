import React from "react";
import cls from './SendMessage.module.css';

const SendMessage = (props) => {

	let onSendMessage = () => {
		props.sendMessage();
	}

	let onUpdateMessage = (e) => {
		let newMessage = e.target.value;
		props.updateMessage(newMessage);
	}

	return (
		<div className={cls.sendMessage}>
			<textarea name="message" onChange={onUpdateMessage} className={cls.sendMessage__field} value={props.newMessageText}></textarea>
			<button onClick={onSendMessage} className={cls.sendMessage__btn}>SEND</button>
		</div>
	)
};

export default SendMessage;


