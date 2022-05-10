import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id:1, message:'Hi,how are you?'},
				{id:2, message: 'Its my first post'}
			],
			newPostText: ''
		},
		dialogsPage: {
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
		},
		sideBarPage: {
			friends: [
				{id:1, name: 'Anna', imgUrl:"367065624.jpg?1649349755"},
				{id:1, name: 'Maksim', imgUrl:"85681564.jpg?1649349758"},
				{id:1, name: 'Petr', imgUrl:"529938626.jpg?1649349768"}
			]
		}
	},
	_callSubscriber () {
		console.log('state changed');
	},

	getState () {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch (action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sideBarPage = sidebarReducer(this._state.sideBarPage, action);
		this._callSubscriber(this._state);
	}

}





export default store;