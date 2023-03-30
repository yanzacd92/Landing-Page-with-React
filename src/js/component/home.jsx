import React from "react";

import { Card } from './card.jsx';
import { Navbar }  from "./navbar.jsx";
import { Jumbotron }  from "./jumbotron.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="content container-fluid">
			<Navbar />
			<div className="components">
				<Jumbotron />
				<div className="cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
