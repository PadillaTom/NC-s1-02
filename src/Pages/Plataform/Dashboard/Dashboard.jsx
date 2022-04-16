import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.sass";

import authService from "../../../Services/auth.service";
import userService from "../../../Services/user.service";
import Loading from "../../../Components/Loading/Loading";

const Dashboard = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [role, setRole] = useState(null);
	const [meData, setMeData] = useState(null);

	useEffect(() => {
		userService.getMeData().then(
			(response) => {
				setMeData(response.data);
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
		window.location.reload();
	};
	if (meData) {
		return (
			<section className="section page-sect">
				<div className="section-center">
					<div className="section-title">
						<span>{meData.username}</span>
						<h2>Main Dashboard </h2>
					</div>
					<h2>{meData.email}</h2>
					<h2>{meData.firt_name}</h2>
					<h2>{meData.last_name}</h2>
					<h2>{meData.country}</h2>
					<h2>{meData.province}</h2>
					<h2>{meData.city}</h2>
					<h2>{meData.dni}</h2>
					<h2>{meData.age}</h2>
				</div>
				<button type="submit" onClick={handleLogout}>
					Logout
				</button>
			</section>
		);
	} else {
		return <Loading isPage={true}></Loading>;
	}
};

export default Dashboard;
