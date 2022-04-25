let rerenderEntireTree = () => {
	console.log('state changed');
}

let state = {
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
}

export const addPost = () => {

	let newPost = {
		id:5,
		message: state.profilePage.newPostText
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const sendNewMessage = () => {
debugger
	let newMessage = {
		id: state.dialogsPage.messages[state.dialogsPage.messages.length-1].id + 1,
		message: state.dialogsPage.newMessageText
	};

	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
	state.dialogsPage.newMessageText = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}


export default state;