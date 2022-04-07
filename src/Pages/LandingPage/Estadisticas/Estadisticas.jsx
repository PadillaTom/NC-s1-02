import React from "react";
import "./Estadisticas.sass";

const Estadisticas = () => {
	return (
		<section className="section stats-sect">
			<div className="section-center">
				<div className="section-title">
					<span>Clientes Satisfechos</span>
					<h2>Te ayudamos a lograr los mejores resultados</h2>
				</div>
				<div className="stats-container">
					<div className="single-stat">
						<span>298K+</span>
						<p>Clientes satisfechos con nuestros servicios.</p>
					</div>
					<div className="single-stat">
						<span>12M+</span>
						<p>De llamadas realizadas mediante nuestra App.</p>
					</div>
					<div className="single-stat">
						<span>8k+</span>
						<p>De historiales clinicos en curso.</p>
					</div>
					<div className="single-stat">
						<span>78%</span>
						<p>De nuestros clientes recomiendan a sus Profesionales</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Estadisticas;
