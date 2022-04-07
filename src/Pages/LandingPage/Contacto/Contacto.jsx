import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import "./Contacto.sass";

const Contacto = () => {
	return (
		<section className="contact-sect">
			<div className="section-center">
				<div className="contact-container">
					<div className="contact-top">
						<h2>Contáctenos</h2>
						<p>Un representante lo atenderá ante cualquier cosulta.</p>
						<div className="contact-cta">
							<AiOutlineMail className="contact-icon"></AiOutlineMail>
							<span>support@website.com</span>
						</div>
						<div className="contact-cta">
							<AiOutlinePhone className="contact-icon"></AiOutlinePhone>
							<span>(480) 555-0103</span>
						</div>
					</div>
					<div className="contact-bottom">
						<h2>Envíenos un mensaje</h2>
						<form action="" className="contact-form">
							<div className="single-input">
								<label htmlFor="name">Nombre</label>
								<input
									name="name"
									id="name"
									type="text"
									placeholder="Cosme Fulanito"
								/>
							</div>
							<div className="single-input">
								<label htmlFor="email">E-mail</label>
								<input
									name="email"
									id="email"
									type="email"
									placeholder="cosme@email.com"
								/>
							</div>
							<div className="single-input">
								<label htmlFor="phone">Móbil</label>
								<input
									name="phone"
									id="phone"
									type="text"
									placeholder="+54 11 234 56 78"
								/>
							</div>
							<div className="single-input">
								<label htmlFor="subject">Acerca de</label>
								<input
									name="subject"
									id="subject"
									type="text"
									placeholder="Tomas"
								/>
							</div>
							<div className="single-textarea">
								<label htmlFor="message">Mensaje</label>
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="10"
									placeholder="Mensaje..."
								></textarea>
							</div>
							<button type="submit" className="btn-light btn-mobile">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacto;
