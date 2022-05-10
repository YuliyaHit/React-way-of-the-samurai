import React from "react";
import cls from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessage/SendMessageContainer";


const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
	let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

	return (
		<div className={cls.dialogs}>
			<div className={cls.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={cls.messages}>
				{messagesElements}
				<SendMessageContainer store={props.store}/>
			</div>
		</div>
	)
}

export default Dialogs;


