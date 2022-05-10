import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const reducer = (state, action) => {
	// If we try to access an action that doesnt exist => throw an error

	switch (action.type) {
		case DISPLAY_ALERT:
			return {
				...state,
				showAlert: true,
				alertType: 'danger',
				alertText: 'Please provide all values! 🤨',
			};
		case CLEAR_ALERT:
			return {
				...state,
				showAlert: false,
				alertType: '',
				alertText: '',
			};
		default:
			return state;
	}

	throw new Error(`no such action ${action.type}`);
};

export default reducer;
