import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsArrowUpCircleFill, BsArrowRightSquareFill } from "react-icons/bs";

import "./Footer.sass";

import ScrollToTopOnClick from "../../Utils/ScrollToTopOnClick";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-center">
				{/* Footer TOP */}
				<div className="footer-top">
					<h2 className="copy-desktop">
						Copyright &copy; {new Date().getFullYear()}. Piscored. All rights
						reserved.
					</h2>
					<div className="map-list">
						<h2 className="list-title">Services</h2>
						<h2 className="list-item">Email Marketing</h2>
						<h2 className="list-item">Campaigns</h2>
						<h2 className="list-item">Branding</h2>
						<h2 className="list-item">Offline</h2>
					</div>
					<div className="map-list">
						<h2 className="list-title">About</h2>
						<h2 className="list-item">Our Story</h2>
						<h2 className="list-item">Benefits</h2>
						<h2 className="list-item">Team</h2>
						<h2 className="list-item">Careers</h2>
					</div>
					<BsArrowUpCircleFill
						id="arrowUp"
						onClick={() => {
							ScrollToTopOnClick();
						}}
					></BsArrowUpCircleFill>
				</div>
				{/* Footer BOT */}
				<div className="footer-bot">
					<form className="newsletter">
						<h2>Subscribe to our newsletter</h2>
						<div className="single-input news-input">
							<input type="email" placeholder="Email Address" />
							<button type="submit">
								<BsArrowRightSquareFill id="submitArrow"></BsArrowRightSquareFill>
							</button>
						</div>
					</form>
					<div className="social-icons">
						<FaFacebookF></FaFacebookF>
						<FaTwitter></FaTwitter>
						<FaInstagram></FaInstagram>
					</div>
				</div>
			</div>
			<div className="copy-mobile">
				<h2>
					Copyright &copy; {new Date().getFullYear()}. Piscored. All rights
					reserved.
				</h2>
			</div>
		</footer>
	);
};

export default Footer;
