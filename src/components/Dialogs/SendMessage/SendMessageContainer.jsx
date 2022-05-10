import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";
import StoreContext from "../../../storeContext";

const SendMessageContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let newMessageText = store.getState().dialogsPage.newMessageText;
					let sendMessage = () => {
						store.dispatch(sendMessageActionCreator());
					}

					let updateMessage = (newMessage) => {
						store.dispatch(updateMessageActionCreator(newMessage));
					}
					return (
						<SendMessage updateMessage={updateMessage} sendMessage={sendMessage}
						             newMessageText={newMessageText}/>
					)
				}
			}
		</StoreContext.Consumer>
	);
};

export default SendMessageContainer;


