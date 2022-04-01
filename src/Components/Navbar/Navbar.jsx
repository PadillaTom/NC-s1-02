import React from "react";
import "./Navbar.sass";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="nav-center">
				<h2 className="nav-left">Logo</h2>
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
