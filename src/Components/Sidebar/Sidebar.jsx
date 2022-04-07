import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.sass";

const Sidebar = ({ closeFunction }) => {
	return (
		<article className="sidebar-container">
			<div className="sidebar-center">
				<div className="side-top">
					<h2>Logo</h2>
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
