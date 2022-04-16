import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./Navbar.sass";
import Logox1 from "../../Assets/Logox1.png";
import Sidebar from "../Sidebar/Sidebar";

import authService from "../../Services/auth.service";
import { ScrollToTopOnClick, ScrollToView } from "../../Utils";

const Navbar = () => {
	let navigate = useNavigate();
	const scrollIDs = ["esp", "prof", "cont"];
	const [isOpen, setIsOpen] = useState(false);
	const [showPatientBoard, setShowPatientBoard] = useState(false);
	const [showProfessionalBoard, setShowProfessionalBoard] = useState(false);
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = authService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
			if (user.roles) {
				let myRoles = user.roles;
				myRoles.map((role) => {
					if (role.name === "ROLE_PATIENT") {
						setShowPatientBoard(true);
					}
					if (role.name === "ROLE_PROFESSIONAL") {
						setShowProfessionalBoard(true);
					}
					if (role.name === "ROLE_ADMIN") {
						setShowAdminBoard(true);
					}
				});
			}

			if (user.roleName) {
				let myRoles = user.roleName;
				myRoles.map((role) => {
					if (role.authority === "ROLE_PATIENT") {
						setShowPatientBoard(true);
					}
					if (role.authority === "ROLE_PROFESSIONAL") {
						setShowProfessionalBoard(true);
					}
					if (role.authority === "ROLE_ADMIN") {
						setShowAdminBoard(true);
					}
				});
			}
		}
	}, []);

	const openSidebar = () => {
		setIsOpen(true);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	const handleLogout = () => {
		authService.logout();
		navigate("/");
		window.location.reload();
	};

	return (
		<React.Fragment>
			<nav className="navbar-container">
				<div className="nav-center">
					{currentUser ? (
						<Link
							to="/dashboard"
							className="nav-left"
							onClick={() => {
								ScrollToTopOnClick();
							}}
						>
							<img src={Logox1} alt="TeleMed" />
						</Link>
					) : (
						<Link
							to="/"
							className="nav-left"
							onClick={() => {
								ScrollToTopOnClick();
							}}
						>
							<img src={Logox1} alt="TeleMed" />
						</Link>
					)}
					<div
						className="nav-ham"
						onClick={() => {
							openSidebar();
						}}
					>
						<AiOutlineMenu></AiOutlineMenu>
					</div>

					{/* PUBLIC Bar */}
					{!currentUser && (
						<ul className="nav-right">
							<li
								onClick={() => {
									ScrollToView(scrollIDs[0]);
								}}
								className="nav-link"
							>
								Nuestros Especialistas
							</li>
							<li className="nav-link">
								<Link
									to="/"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Blog
								</Link>
							</li>
							<li
								onClick={() => {
									ScrollToView(scrollIDs[2]);
								}}
								className="nav-link"
							>
								Contacto
							</li>
							<li className="nav-link">
								<Link
									to="/ingreso"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Acceder
								</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/registro"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Registro
								</Link>
							</li>
						</ul>
					)}

					{/* PATIENT Bar */}
					{showPatientBoard && (
						<ul className="nav-right">
							<li onClick={() => {}} className="nav-link">
								<Link to="/dashboard">Mi Perfil</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/pat/mis-turnos"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Mis Turnos
								</Link>
							</li>
							<li onClick={() => {}} className="nav-link">
								<Link to="/pat/mis-doctores">Mis Doctores</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/pat/historial"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Historial Clinico
								</Link>
							</li>
							<li className="nav-link" onClick={handleLogout}>
								Salir
							</li>
						</ul>
					)}
					{/* PROFESSIONAL Bar */}
					{showProfessionalBoard && (
						<ul className="nav-right">
							<li onClick={() => {}} className="nav-link">
								<Link to="/dashboard">Mi Perfil</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/prof/mi-agenda"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Mi Agenda
								</Link>
							</li>
							<li onClick={() => {}} className="nav-link">
								<Link
									to="/prof/mis-pacientes"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Mis Pacientes
								</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/prof/ver-historiales"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									QR Historial Clinico
								</Link>
							</li>
							<li className="nav-link" onClick={handleLogout}>
								Salir
							</li>
						</ul>
					)}

					{/* ADMIN Bar */}
					{showAdminBoard && (
						<ul className="nav-right">
							<li onClick={() => {}} className="nav-link">
								<Link to="/dashboard">Mi Perfil</Link>
							</li>
							<li onClick={() => {}} className="nav-link">
								<Link
									to="/adm/usuarios-list"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Usuarios
								</Link>
							</li>
							<li className="nav-link">
								<Link
									to="/adm/profesionales-list"
									onClick={() => {
										ScrollToTopOnClick();
									}}
								>
									Profesionales
								</Link>
							</li>
							<li className="nav-link" onClick={handleLogout}>
								Salir
							</li>
						</ul>
					)}
				</div>
			</nav>
			{isOpen && (
				<Sidebar
					closeFunction={closeSidebar}
					scrollList={scrollIDs}
					isLogged={currentUser}
					showPatientBoard={showPatientBoard}
					showAdminBoard={showAdminBoard}
					showProfessionalBoard={showProfessionalBoard}
				></Sidebar>
			)}
		</React.Fragment>
	);
};

export default Navbar;
