import React from "react";
import cls from './Dialogs.module.css';
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().dialogsPage;
					return (
						<Dialogs dialogsPage={state} store={store}/>
					);
				}
			}
		</StoreContext.Consumer>
	);
}

export default DialogsContainer;


