import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import "./Sidebar.sass";
import Logox1 from "../../Assets/Logox1.png";

const Sidebar = ({ closeFunction }) => {
	return (
		<article className="sidebar-container">
			<div className="sidebar-center">
				<div className="side-top">
					<Link to="/" className="nav-left">
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
					<h2>Explorar</h2>
					<hr />
					<div className="side-links">
						<Link
							to="/"
							onClick={() => {
								closeFunction();
							}}
						>
							Nuestros Especialistas
						</Link>
						<Link
							to="/"
							onClick={() => {
								closeFunction();
							}}
						>
							Contacto
						</Link>
						<Link
							to="/"
							onClick={() => {
								closeFunction();
							}}
						>
							Blog
						</Link>
						<Link
							to="/"
							onClick={() => {
								closeFunction();
							}}
						>
							Acceder
						</Link>
						<Link
							to="/"
							onClick={() => {
								closeFunction();
							}}
						>
							Registrarse
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Sidebar;
