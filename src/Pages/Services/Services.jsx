import React from "react";
import "./Services.sass";

import { myServices } from "../../Utils/constants";

const Services = () => {
	return (
		<section className="services-sect">
			<div className="section-center">
				<div className="services-title">
					<span>Servicios</span>
					<h2>Como te podemos Ayudar?</h2>
				</div>
				<div className="services-container">
					{myServices.map((singleService) => {
						return (
							<article className="service-container" key={singleService.id}>
								<div className="img-container">
									<img src={singleService.imageUrl} alt={singleService.title} />
								</div>
								<div className="service-desc">
									<h2>{singleService.title}</h2>
									<p>{singleService.description}</p>
									<button className="btn-ghost">{singleService.ctaText}</button>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
