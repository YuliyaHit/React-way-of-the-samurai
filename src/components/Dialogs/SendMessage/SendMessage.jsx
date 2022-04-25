import React from "react";
import cls from './SendMessage.module.css';

const SendMessage = (props) => {

	let message = React.createRef();

	let sendMessage = () => {
		props.sendNewMessage();
	}

	let updateMessage = () => {
		let newMessage = message.current.value;
		props.updateNewMessageText(newMessage);
	}


	return (
		<div className={cls.sendMessage}>
			<textarea name="message" onChange={updateMessage} ref={message} className={cls.sendMessage__field} value={props.newMessageText}></textarea>
			<button onClick={sendMessage} className={cls.sendMessage__btn}>SEND</button>
		</div>
	)
};

export default SendMessage;


