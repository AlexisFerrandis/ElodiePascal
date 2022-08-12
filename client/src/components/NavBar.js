import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar-container">
			<a href="#home">
				<h3 className="navbar-container__title">Elodie Pascal</h3>
			</a>
			<ul className="navbar-container__links">
				<li className="link">
					<a href="#author">L'autrice</a>
				</li>
				<li className="link">
					<a href="#books">Livres</a>
				</li>
				<li className="link">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
