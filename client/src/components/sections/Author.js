import React from "react";

import profilPic from "../../assets/author/profil-pic.jpg";

const Home = () => {
	return (
		<section className="author-section" id="author">
			<div className="author-section__content">
				<div className="author-section__content--picture">
					<img src={profilPic} alt="profil pic" />
				</div>
				<div className="author-section__content--text">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<a href="#books" className="btn btn-primary">
						Lorem
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
