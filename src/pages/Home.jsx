import React from "react";
import Header from "../components/Header";
import Banner from "../components/HomeComponents/Banner";
import Projects from "../components/HomeComponents/Projects";


const Home = () => {
	return (
		<>
		{/* HEADER */}
		<Header />
		{/* Banner */}
		<Banner />
		{/* Projects */}
		<Projects />
		</>
	);
};

export default Home;
