import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./CallToAction.sass";

import { bannerCTA } from "../../Utils/constants";

const CallToAction = () => {
	return (
		<section className="section cta-sect">
			<div className="section-center">
				<div className="cta-container">
					<div className="img-container">
						<img src={bannerCTA} alt="Unirse" />
					</div>
					<div className="cta-info">
						<span>¿Eres Profesional?</span>
						<h2>Unite a nuestro equipo</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
							cumque doloremque quidem atque maiores consequuntur fuga, at ullam
							dolorum aliquid.
						</p>
						<Link to="/register" className="btn-solid">
							Comenzá
							<BsArrowRight id="btnArrow"></BsArrowRight>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
