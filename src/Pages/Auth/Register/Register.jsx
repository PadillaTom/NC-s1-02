import React, { useState } from "react";
import "./Register.sass";

import { useNavigate } from "react-router-dom";
import authService from "../../../Services/auth.service";

const Register = () => {
	let navigate = useNavigate();
	const [data, setData] = useState({
		user: {
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			age: 0,
			dni: "",
			country: "",
			province: "",
			city: "",
		},
		image: {},
	});

	// Handle Data:
	const handleData = (e) => {
		const newData = { ...data };
		newData.user[e.target.id] = e.target.value;
		newData.image = document.getElementById("image").files[0];
		setData(newData);
	};

	// onSubmit:
	const handleSubmit = (e) => {
		e.preventDefault();
		authService.register(data).then(
			() => {
				navigate("/dashboard");
				window.location.reload();
			},
			(error) => {
				console.log(error);
			}
		);
	};

	return (
		<section className="section page-sect">
			<div className="section-center">
				<div className="section-title">
					<h2>Register</h2>
				</div>
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit} className="register-form">
					{/* Email */}
					<div className="single-input">
						<label htmlFor="username">Email</label>
						<input
							type="text"
							name="username"
							placeholder="E-mail"
							id="email"
							value={data.user.email}
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Password */}
					<div className="single-input">
						<label htmlFor="password">Contraseña</label>
						<input
							type="text"
							name="password"
							placeholder="Ingrese su contraseña"
							value={data.user.password}
							id="password"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* FOTO */}
					<div className="file-input">
						<label htmlFor="password">Foto De Perfil</label>
						<input
							type="file"
							name="image"
							placeholder="Ingrese su contraseña"
							id="image"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* First_Name */}
					<div className="single-input">
						<label htmlFor="firstName">Nombre</label>
						<input
							type="text"
							name="first_name"
							placeholder="Ej: Cosme"
							value={data.user.first_name}
							id="first_name"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Last_Name */}
					<div className="single-input">
						<label htmlFor="last_name">Apellido</label>
						<input
							type="text"
							name="last_name"
							placeholder="Ej: Fulanito"
							value={data.user.last_name}
							id="last_name"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* DNI */}
					<div className="single-input">
						<label htmlFor="dni">DNI</label>
						<input
							type="text"
							name="dni"
							placeholder="Ej: 35000000"
							value={data.user.dni}
							id="dni"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Age */}
					<div className="single-input">
						<label htmlFor="dni">Edad</label>
						<input
							type="number"
							name="age"
							placeholder="Ej: 38"
							value={data.user.age}
							id="age"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Country */}
					<div className="single-input">
						<label htmlFor="country">Pais</label>
						<input
							type="text"
							name="country"
							placeholder="Ej: Argentina"
							value={data.user.country}
							id="country"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* Province */}
					<div className="single-input">
						<label htmlFor="province">Provincia</label>
						<input
							type="text"
							name="province"
							placeholder="Ej: Buenos Aires"
							value={data.user.province}
							id="province"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					{/* City */}
					<div className="single-input">
						<label htmlFor="city">Ciudad</label>
						<input
							type="text"
							name="city"
							placeholder="Ej: Olivos"
							value={data.user.city}
							id="city"
							onChange={(e) => {
								handleData(e);
							}}
						/>
					</div>
					<button type="submit" className="btn-pastel">
						Registro
					</button>
				</form>
			</div>
		</section>
	);
};

export default Register;
