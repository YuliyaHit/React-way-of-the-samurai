import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sideBarPage: sidebarReducer
});
let store =  legacy_createStore(redusers);


export default store;