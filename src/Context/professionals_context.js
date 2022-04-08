import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../Reducers/professionals_reducer";
import {
	GET_PROFESSIONALS,
	GET_PROFESSIONALS_SUCCESS,
	GET_PROFESSIONALS_ERROR,
} from "../Actions/actions";

import { apiBaseUrl } from "../Utils/constants";

const initialState = {
	professionals_loading: false,
	professionals_error: false,
	professionals: [],
};

const ProfessionalsContext = React.createContext();

export const ProfessionalsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// *** Get All ***
	const fetchAllProfessionals = async (url) => {
		dispatch({ type: GET_PROFESSIONALS });
		try {
			const response = await axios.get(url);
			const professionals = response.data;
			dispatch({ type: GET_PROFESSIONALS_SUCCESS, payload: professionals });
		} catch (error) {
			dispatch({ type: GET_PROFESSIONALS_ERROR });
		}
	};

	// *** UseEffect ***
	useEffect(() => {
		fetchAllProfessionals(`${apiBaseUrl}/professional/all`);
	}, []);

	// *** Return ***
	return (
		<ProfessionalsContext.Provider value={{ ...state }}>
			{children}
		</ProfessionalsContext.Provider>
	);
};

export const useProfessionalsContext = () => {
	return useContext(ProfessionalsContext);
};
