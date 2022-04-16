import React from "react";

const Loading = (props) => {
	const { isPage } = props;
	return (
		<section className={`section ${isPage && "page-sect"}`}>
			<div className="section-center">
				<div className="section-title">
					<span style={{ fontSize: "1.5rem", color: "lightcoral" }}>
						Cargando...
					</span>
				</div>
			</div>
		</section>
	);
};

export default Loading;
