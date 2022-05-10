import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		// After 3 seconds clear the alert
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	return (
		// children = our app. Thats what we are rendering
		<AppContext.Provider value={{ ...state, displayAlert }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
