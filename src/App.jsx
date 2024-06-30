import React from 'react'
import './App.css' 
import QuemSomos from './pages/equipe-page/equipe'
import { useState } from "react";
import "./App.css";
import Contato from "./pages/contato-page/contato.jsx";

const App = () => {
	// Para rodar o app Va ao terminal e digite npm run dev
	return (
		<>
		<QuemSomos />
		<Contato />;
		</>
	);
	
};

export default App;
