import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../Reducers/professions_reducer";
import {
	GET_PROFESSIONS,
	GET_PROFESSIONS_SUCCESS,
	GET_PROFESSIONS_ERROR,
} from "../Actions/actions";

import { apiBaseUrl } from "../Utils/constants";

const initialState = {
	professions_loading: false,
	professions_error: false,
	professions: [],
};

const ProfessionsContext = React.createContext();

export const ProfessionsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// *** Get All ***
	const fetchAllProfessions = async (url) => {
		dispatch({ type: GET_PROFESSIONS });
		try {
			const response = await axios.get(url);
			const professions = response.data;
			dispatch({ type: GET_PROFESSIONS_SUCCESS, payload: professions });
		} catch (error) {
			dispatch({ type: GET_PROFESSIONS_ERROR });
		}
	};

	// *** UseEffect ***
	useEffect(() => {
		fetchAllProfessions(`${apiBaseUrl}/profession`);
	}, []);

	// *** Return ***
	return (
		<ProfessionsContext.Provider value={{ ...state }}>
			{children}
		</ProfessionsContext.Provider>
	);
};

export const useProfessionsContext = () => {
	return useContext(ProfessionsContext);
};
