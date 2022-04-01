import React from "react";
import { Link } from "react-router-dom";
import "./Error404.sass";

const Error404 = () => {
	return (
		<section className="section">
			<div className="section-center">
				<div className="container">
					<h1>404</h1>
					<h2>Pagina no encontrada</h2>
					<Link to="/" className="btn-solid">
						Volver al inicio
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Error404;
