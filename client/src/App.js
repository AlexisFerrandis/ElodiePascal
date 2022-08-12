import React from "react";
import NavBar from "./components/NavBar";

import Home from "./components/sections/Home";
import Author from "./components/sections/Author";
import Books from "./components/sections/Books";

const App = () => {
	return (
		<div className="App">
			<NavBar />

			<Home />
			<Author />
			<Books />
		</div>
	);
};

export default App;
