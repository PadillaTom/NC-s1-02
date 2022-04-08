import React, { Fragment } from "react";
import "./Homepage.sass";

import Banner from "../Banner/Banner";
import Professionals from "../Professionals/Professionals";
import Professions from "../Professions/Professions";
import CallToAction from "../CallToAction/CallToAction";
import Services from "../Services/Services";
import Contacto from "../Contacto/Contacto";
import Estadisticas from "../Estadisticas/Estadisticas";

import { ProfessionsProvider } from "../../../Context/professions_context";
import { ProfessionalsProvider } from "../../../Context/professionals_context";

const Homepage = () => {
	return (
		<Fragment>
			<Banner></Banner>
			<ProfessionalsProvider>
				<Professionals></Professionals>
			</ProfessionalsProvider>
			<ProfessionsProvider>
				<Professions></Professions>
			</ProfessionsProvider>
			<CallToAction></CallToAction>
			<Services></Services>
			<Estadisticas></Estadisticas>
			<Contacto></Contacto>
		</Fragment>
	);
};

export default Homepage;
