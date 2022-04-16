import React from "react";

const Error = (props) => {
	const { isPage } = props;
	return (
		<section className={`section ${isPage && "page-sect"}`}>
			<div className="section-center">
				<div className="section-title">
					<span style={{ fontSize: "1.5rem", color: "lightcoral" }}>
						Ocurrió un error...
					</span>
				</div>
			</div>
		</section>
	);
};

export default Error;
