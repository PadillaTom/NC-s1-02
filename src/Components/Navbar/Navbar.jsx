import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "./Navbar.sass";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="nav-center">
				<Link to="/" className="nav-left">
					Logo
				</Link>
				<div className="nav-ham">
					<AiOutlineMenu></AiOutlineMenu>
				</div>
				<ul className="nav-right">
					<li className="nav-link">Nuestros Especialistas</li>
					<li className="nav-link">Contacto</li>
					<li className="nav-link">Blog</li>
					<li className="nav-link">Acceder</li>
					<li className="nav-link">Registrarse</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
