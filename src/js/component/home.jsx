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
				<div className="d-flex gap-5">
					<Card />
					<Card />
					<Card />
					<Card />

				</div>

			</div>
			<PieDePagina />

		</div>
	);
};

export default Home;
