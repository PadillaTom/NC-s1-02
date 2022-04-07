import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import "./Navbar.sass";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openSidebar = () => {
		setIsOpen(true);
	};
	const closeSidebar = () => {
		setIsOpen(false);
	};

	return (
		<React.Fragment>
			<nav className="navbar-container">
				<div className="nav-center">
					<Link to="/" className="nav-left">
						Logo
					</Link>
					<div
						className="nav-ham"
						onClick={() => {
							openSidebar();
						}}
					>
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
			{isOpen && <Sidebar closeFunction={closeSidebar}></Sidebar>}
		</React.Fragment>
	);
};

export default Navbar;
