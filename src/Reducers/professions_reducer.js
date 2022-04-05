import {
	GET_PROFESSIONS,
	GET_PROFESSIONS_SUCCESS,
	GET_PROFESSIONS_ERROR,
} from "../Actions/actions";

const professions_reducer = (state, action) => {
	// *** Get All ***
	if (action.type === GET_PROFESSIONS) {
		return { ...state, professions_loading: true };
	}
	if (action.type === GET_PROFESSIONS_SUCCESS) {
		return {
			...state,
			professions_loading: false,
			professions: action.payload,
		};
	}
	if (action.type === GET_PROFESSIONS_ERROR) {
		return {
			...state,
			professions_loading: false,
			professions_error: true,
		};
	}
	throw new Error(`No Matching ${action.type} -> Action Type`);
};

export default professions_reducer;
