import React, { Fragment } from "react";
import "./Homepage.sass";

import Banner from "../Banner/Banner";
import Professions from "../Professions/Professions";
import CallToAction from "../CallToAction/CallToAction";
import Services from "../Services/Services";
import Contacto from "../Contacto/Contacto";

import { ProfessionsProvider } from "../../Context/professions_context";

const Homepage = () => {
	return (
		<Fragment>
			<Banner></Banner>
			<ProfessionsProvider>
				<Professions></Professions>
			</ProfessionsProvider>
			<CallToAction></CallToAction>
			<Services></Services>
			<Contacto></Contacto>
		</Fragment>
	);
};

export default Homepage;
