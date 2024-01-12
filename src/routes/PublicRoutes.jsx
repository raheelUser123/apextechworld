import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Careers from "../pages/Careers";

const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/careers" element={<Careers />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PublicRoutes;
