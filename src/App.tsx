import React from 'react';
import "./App.scss";
import AppRoutes from './components/AppRoutes/AppRoutes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
	return (
		<div className='app'>
			<Header />
			<Navbar />
			<AppRoutes />
			<Footer />
		</div>
	)
}

export default App;
