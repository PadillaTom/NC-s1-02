import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.sass";
import Navbar from "../Navbar/Navbar";

import { Error404, Homepage } from "../../Pages";
import Footer from "../Footer/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Homepage></Homepage>}></Route>
					<Route path="*" element={<Error404></Error404>}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
