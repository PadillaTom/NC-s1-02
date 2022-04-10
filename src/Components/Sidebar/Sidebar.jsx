import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import "./Sidebar.sass";
import Logox1 from "../../Assets/Logox1.png";

import ScrollToTopOnClick from "../../Utils/ScrollToTopOnClick";
import { ScrollToView } from "../../Utils";

const Sidebar = ({ closeFunction, scrollList }) => {
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
									to="/"
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
									to="/"
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
			</div>
		</article>
	);
};

export default Sidebar;
