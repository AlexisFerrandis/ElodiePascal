import React from "react";

// img
// import newBook from "../../assets/home/new-book.png";
import alternate from "../../assets/home/alternate.png";

const Home = () => {
	return (
		<section className="home-section" id="home">
			<div className="home-section__hero">
				<div className="home-section__hero--text">
					<h1>Lorem ipsum dolor sit amet</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<a href="#books" className="btn btn-primary">
						Lorem
					</a>
				</div>

				<div className="home-section__hero--picture">
					<img src={alternate} alt="new book" />
				</div>
			</div>
		</section>
	);
};

export default Home;
