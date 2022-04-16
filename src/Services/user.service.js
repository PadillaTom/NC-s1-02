import axios from "axios";
import authHeader from "./auth-header";
import { apiBaseUrl } from "../Utils/constants";

const getMeData = async () => {
	return await axios.get(apiBaseUrl + "/user/me", {
		headers: authHeader(),
	});
};

const userService = {
	getMeData,
};
export default userService;
