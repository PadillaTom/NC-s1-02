import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Sidebar.sass";
import Logox1 from "../../Assets/Logox1.png";

import { ScrollToTopOnClick, ScrollToView } from "../../Utils";
import authService from "../../Services/auth.service";

const Sidebar = ({
	closeFunction,
	scrollList,
	isLogged,
	showAdminBoard,
	showPatientBoard,
	showProfessionalBoard,
}) => {
	let navigate = useNavigate();
	const handleLogout = () => {
		authService.logout();
		closeFunction();
		navigate("/");
		window.location.reload();
	};
	return (
		<article className="sidebar-container">
			<div className="sidebar-center">
				<div className="side-top">
					<Link
						to="/"
						className="nav-left"
						onClick={() => {
							ScrollToTopOnClick();
							closeFunction();
						}}
					>
						<img src={Logox1} alt="TeleMed" />
					</Link>
					<FaTimes
						onClick={() => {
							closeFunction();
						}}
						id="sideClose"
					></FaTimes>
				</div>
				{/* PUBLIC SIDE */}
				{!isLogged && (
					<div className="side-bot">
						<div className="side-section">
							<h2>Explorar</h2>
							<hr />
							<div className="side-links">
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									Inicio
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToView(scrollList[0]);
										closeFunction();
									}}
								>
									Nuestros Especialistas
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToView(scrollList[1]);
										closeFunction();
									}}
								>
									Profesiones
								</li>
								<li className="side-link">
									<Link
										to="/"
										onClick={() => {
											ScrollToTopOnClick();
											closeFunction();
										}}
									>
										Blog
									</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToView(scrollList[2]);
										closeFunction();
									}}
								>
									Contacto
								</li>
							</div>
						</div>
						<div className="side-section">
							<h2>Usuarios</h2>
							<hr />
							<div className="side-links">
								<li className="side-link">
									<Link
										to="/ingreso"
										onClick={() => {
											ScrollToTopOnClick();
											closeFunction();
										}}
									>
										Acceder
									</Link>
								</li>
								<li className="side-link">
									<Link
										to="/registro"
										onClick={() => {
											ScrollToTopOnClick();
											closeFunction();
										}}
									>
										Registrarse
									</Link>
								</li>
							</div>
						</div>
					</div>
				)}
				{/* PATIENT SIDE */}
				{showPatientBoard && (
					<div className="side-bot">
						<div className="side-section">
							<h2>Explorar</h2>
							<hr />
							<div className="side-links">
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/dashboard">Mi Perfil</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/pat/mis-doctores">Mis Doctores</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/pat/mis-turnos">Mis Turnos</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/pat/historial">Historial Clinico</Link>
								</li>
								<li className="side-link" onClick={handleLogout}>
									Salir
								</li>
							</div>
						</div>
					</div>
				)}
				{/* PROFESSIONAL SIDE */}
				{showProfessionalBoard && (
					<div className="side-bot">
						<div className="side-section">
							<h2>Explorar</h2>
							<hr />
							<div className="side-links">
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/dashboard">Mi Perfil</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/prof/mi-agenda">Mi Agenda</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/prof/mis-pacientes">Mis Pacientes</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/prof/ver-historiales">QR Historial Clinico</Link>
								</li>
								<li className="side-link" onClick={handleLogout}>
									Salir
								</li>
							</div>
						</div>
					</div>
				)}
				{/* ADMIN SIDE */}
				{showAdminBoard && (
					<div className="side-bot">
						<div className="side-section">
							<h2>Explorar</h2>
							<hr />
							<div className="side-links">
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/dashboard">Mi Perfil</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/adm/usuarios-list">Usuarios</Link>
								</li>
								<li
									className="side-link"
									onClick={() => {
										ScrollToTopOnClick();
										closeFunction();
									}}
								>
									<Link to="/adm/profesionales-list">Profesionales</Link>
								</li>

								<li className="side-link" onClick={handleLogout}>
									Salir
								</li>
							</div>
						</div>
					</div>
				)}
			</div>
		</article>
	);
};

export default Sidebar;
