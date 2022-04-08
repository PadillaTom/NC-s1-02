import React from "react";
import "./Services2.sass";

import { myServices2 } from "../../../Utils/constants";

const Services2 = () => {
	return (
		<section className="section">
			<div className="section-center">
				<div className="section-title">
					<span>Ayuda psicológica confiable</span>
					<h2>Psicólogos en línea</h2>
				</div>
				<div className="services2-container">
					{myServices2.map((singleService) => {
						const { id, imageUrl, title, description } = singleService;
						return (
							<article className="service2-card" key={id}>
								<div className="img-container">
									<img src={imageUrl} alt={title} />
								</div>
								<div className="card-info">
									<h2>{title}</h2>
									<p>{description}</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services2;
