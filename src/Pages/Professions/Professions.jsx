import React from "react";
import "./Professions.sass";

import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

import { useProfessionsContext } from "../../Context/professions_context";

const Professions = () => {
	// *** GET ***
	const {
		professions_loading: isLoading,
		professions_error: error,
		professions,
	} = useProfessionsContext();

	if (isLoading) {
		return <Loading></Loading>;
	}
	if (error) {
		return <Error></Error>;
	}
	return (
		<section className="section">
			<div className="section-center">
				<div className="section-title">
					<span>Servicios</span>
					<h2>Nuestras Profesiones</h2>
				</div>
				<div className="professions-container">
					{professions.map((singleProfession) => {
						const { id, title, description, imageUrl } = singleProfession;
						return (
							<article className="prof-card" key={id}>
								<div className="prof-img-container">
									<div className="image-overlay"></div>
									<img src={imageUrl} alt={description} />
								</div>
								<h2 className="prof-title">{title}</h2>
								<p className="prof-desc">{description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Professions;
