import React from "react";
import cls from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";
import {sendNewMessage} from "../../redux/state";

const Dialogs = (props) => {

let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name= {d.name} id = {d.id}/>);
let messagesElements = props.state.messages.map(m => <Message message= {m.message} id={m.id} />);

	return (
		<div className={cls.dialogs}>
			<div className={cls.dialogs__items}>
				{ dialogsElements }
			</div>
			<div className={cls.messages}>
				{ messagesElements }
				<SendMessage sendNewMessage={props.sendNewMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.state.newMessageText}/>
			</div>
		</div>
	)
}

export default Dialogs;


