import React from "react";
import "./Professionals.sass";

import { useProfessionalsContext } from "../../../Context/professionals_context";

import { bannerImageUrl } from "../../../Utils/constants";

const Professionals = () => {
	// *** GET ***
	const {
		professionals_loading: isLoading,
		professionals_error: error,
		professionals,
	} = useProfessionalsContext();

	return (
		<section className="section">
			<div className="section-center">
				<div className="section-title">
					<span>Cuerpo</span>
					<h2>Los mejores profesionales en línea para tí</h2>
				</div>
				<div className="professionals-container">
					{professionals.map((singleProfessional) => {
						const {
							id,
							email,
							first_name,
							last_name,
							age,
							dni,
							image_url,
							country,
							province,
							city,
							enrollment,
							consultationPrice,
							profession,
						} = singleProfessional;
						return (
							<article className="professional-card" key={id}>
								<div className="card-top">
									<img
										src={image_url || bannerImageUrl}
										alt={`${first_name + last_name}`}
									/>
									<h2>LIC. {`${first_name + " " + last_name}`}</h2>
									<span>Cédula {enrollment || "123456"}</span>
								</div>
								<hr />
								<div className="card-bottom">
									<h2>áreas de atención</h2>
									<p>
										Angustia - Ansiedad - Ataque de pánico Autoestima - Celos -
										Diversidad sexual Identidad de género - Miedos y fobias
										Terapia de pareja - VIH
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Professionals;
