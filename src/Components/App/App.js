import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Homepage from "../../Pages/LandingPage/Homepage/Homepage";
import { Error404 } from "../../Pages";

function App() {
	const scrollIDs = ["esp", "prof", "cont"];
	return (
		<div>
			<BrowserRouter>
				<Navbar scrollList={scrollIDs} />
				<Routes>
					<Route path="/" exact element={<Homepage> </Homepage>}></Route>
					<Route path="*" element={<Error404></Error404>}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
