let SEND_MESSAGE = 'SEND-MESSAGE',
	UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{name: 'Dima', id: 1},
		{name: 'Misha', id: 2},
		{name: 'Vasya', id: 3},
		{name: 'Kolya', id: 4},
		{name: 'Sasha', id: 5}
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'fuck duck'},
		{id: 4, message: 'YO-YO'},
		{id: 5, message: 'ooooops!'}
	],
	newMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: state.messages[state.messages.length - 1].id + 1,
				message: state.newMessageText
			};
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default:
			return state;

	}
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newMessage });

export default dialogsReducer;