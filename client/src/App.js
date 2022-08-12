import React from "react";
import NavBar from "./components/NavBar";

import Home from "./components/sections/Home";
import Author from "./components/sections/Author";

const App = () => {
	return (
		<div className="App">
			<NavBar />

			<Home />
			<Author />
		</div>
	);
};

export default App;
