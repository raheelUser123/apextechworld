import React from "react";
import Header from "../components/Header";
import Banner from "../components/HomeComponents/Banner";
import Projects from "../components/HomeComponents/Projects";
import FeaturedWork from "../components/HomeComponents/FeaturedWork";
import OurTeam from "../components/HomeComponents/OurTeam";
import Products from "../components/HomeComponents/Products";
import Footer from "../components/Footer";
import BringIdeas from "../components/HomeComponents/BringIdeas";


const Home = () => {
	return (
		<>
		{/* HEADER */}
		<Header />
		{/* Banner */}
		<Banner />
		{/* Projects */}
		<Projects />
		{/* Feature Work */}
		<FeaturedWork />
		{/* Our Team */}
		<OurTeam />
		{/* Products */}
		<Products />
		{/* fOOTER */}
		{/* BringIdeas */}
		<BringIdeas />
		<Footer />
		</>
	);
};

export default Home;
