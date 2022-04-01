import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Navbar from './components/Common/Navbar';
// import Goals from './pages/Goals';
import Overview from './pages/Overview';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/leaderboard' element={<Leaderboard />} />
					<Route path='/overview' element={<Overview />} />
				</Routes>
				<Navbar />
			</div>
		</BrowserRouter>
	);
}

export default App;
