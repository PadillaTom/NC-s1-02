import {
	GET_PROFESSIONALS,
	GET_PROFESSIONALS_SUCCESS,
	GET_PROFESSIONALS_ERROR,
} from "../Actions/actions";

const professionals_reducer = (state, action) => {
	// *** Get All ***
	if (action.type === GET_PROFESSIONALS) {
		return { ...state, professionals_loading: true };
	}
	if (action.type === GET_PROFESSIONALS_SUCCESS) {
		return {
			...state,
			professionals_loading: false,
			professionals: action.payload,
		};
	}
	if (action.type === GET_PROFESSIONALS_ERROR) {
		return {
			...state,
			professionals_loading: false,
			professionals_error: true,
		};
	}
	throw new Error(`No Matching ${action.type} -> Action Type`);
};

export default professionals_reducer;
