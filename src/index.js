import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
	const [moviesRating, setMovieRating] = useState(0);
	return (
		<div>
			<StarRating maxRating={10} setMovieRating={setMovieRating} />
			<p>This movie was rated {moviesRating} times</p>
		</div>
	);
}

root.render(
	<React.StrictMode>
		{/* <App /> */}

		<StarRating maxRating={10} />
		<StarRating
			maxRating={5}
			color="red"
			size={24}
			messages={["ahmed", "kamel", "ammar", "kk", "sdasd"]}
		/>
		<Test />
	</React.StrictMode>
);
