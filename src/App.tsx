import React, {useState} from "react";
import {StarRating} from "react-customizable-star-rating";
import {Main} from "./components/Main";
import {Box} from "./components/Box";
import {Aside} from "./components/Aside";
import {Documentation} from "./components/Documentation";

export const App = () => {
	const [, onRating] = useState(0);
	return (
		<Main className="app">
			<Box className="wrapper">
				<Box className="documentation">
					<Documentation />
				</Box>
				<Aside>
					<h2>Preview</h2>
					<Box className="star-rating">
						<StarRating onSetRating={onRating} />
					</Box>
				</Aside>
			</Box>
		</Main>
	);
};
