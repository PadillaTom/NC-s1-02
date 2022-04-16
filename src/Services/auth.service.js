import axios from "axios";
import { apiBaseUrl } from "../Utils/constants";

class AuthService {
	// === Register ===
	register(form) {
		delete form.user["image"];
		var userFormData = new FormData();
		userFormData.append(
			"user",
			new Blob([JSON.stringify(form.user)], { type: "application/json" })
		);
		if (form.image === undefined) {
			userFormData.append(
				"image",
				new Blob([form.image], { type: "form-data" })
			);
		} else {
			userFormData.append("image", form.image);
		}
		// new Response(userFormData).text().then(console.log); // To see the entire raw body
		return axios
			.post(apiBaseUrl + "/auth/register", userFormData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				if (response.data.token) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
			});
	}

	// === Login ===
	login(email, password) {
		return axios
			.post(apiBaseUrl + "/auth/login", { email, password })
			.then((response) => {
				if (response.data.token) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
			});
	}

	// === Logout ===
	logout() {
		localStorage.removeItem("user");
	}

	// === GetCurrentUser ===
	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AuthService();
