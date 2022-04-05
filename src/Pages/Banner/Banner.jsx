import React from "react";
import "./Banner.sass";

import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
	return (
		<div className="home-container">
			<div className="home-center">
				<div className="home-left">
					<h2 className="home-text">
						<span>Quiero</span> que alguien me guíe!
					</h2>
					<button className="btn-pastel">
						Probar
						<BsArrowRight id="btnArrow"></BsArrowRight>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
