import React from "react";
import Navegacion from "./navegacion";
import Titulo from "./titulo";
import Card from "./card";
import PieDePagina from "./pieDePagina";

//include images into your bundle


//Pagina Principal
const Home = () => {
	return (
		<div className="d-flex flex-column gap-4">
			<Navegacion />
			<div className="d-flex flex-column align-items-center gap-4">
				<Titulo />
				<div className="container-fluid d-flex flex-column align-items-center justify-content-center col-sm-12 col-lg-9">
					<div className="row">
						<div className="col-sm-12 col-lg-3 mb-3"><Card /></div>
						<div className="col-sm-12 col-lg-3 mb-3"><Card /></div>
						<div className="col-sm-12 col-lg-3 mb-3"><Card /></div>
						<div className="col-sm-12 col-lg-3 mb-3"><Card /></div>

					</div>

				</div>

			</div>
			<PieDePagina />

		</div>
	);
};

export default Home;
