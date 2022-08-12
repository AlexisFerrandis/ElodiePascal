import React from "react";

import profilPic from "../../assets/author/profil-pic.jpg";

const Home = () => {
	return (
		<section className="author-section" id="author">
			<div className="author-section__content">
				<div className="author-section__content--picture">
					<img src={profilPic} alt="profil pic" />
				</div>
				<div className="author-section__content--text"></div>
			</div>
		</section>
	);
};

export default Home;
